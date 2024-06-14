import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PaginationDto } from 'src/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StudentsService extends PrismaClient implements OnModuleInit{

  private readonly logger = new Logger('AuthService');

  onModuleInit() {
    this.$connect();
    this.logger.log('StudentService connected to database')
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;

    const [totalStudents, students] = await Promise.all([
      this.user.count({ where: { isActive: true, role:'STUDENT' } }),
      this.user.findMany({
        where: { isActive: true, role:'STUDENT' },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    students.forEach(user => delete user.password);

    const totalPages = Math.ceil(totalStudents / limit);

    return {
      totalStudents,
      page,
      totalPages,
      next: (totalStudents - (page * limit)) > 0 ? `api/students?page=${page + 1}&limit=${limit}` : null,
      prev: (page - 1 > 0) ? `api/students?page=${page - 1}&limit=${limit}` : null,
      students
    }
  }


  async findOne(id: string) {
    const user = await this.user.findUnique({
      where: { id , role: 'STUDENT'},
      include: {
        grade_user_gradeIdTograde: {
          include: {
            user_grade_tutorIdTouser: {
              select: {
                name: true,
                last_name: true,
              }

            }
          }
        },
        notas: {
          include: {
            gradeCourseId: {
              include: {
                cursoId:true,
                teacherId:true
              }
            }
          }
        },
      }
    });


    if (!user) throw new BadRequestException('User not found');

    const response = {
      student:{
        id: user.id,
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        birthdate: user.birthdate,
        dni: user.dni,
        role: user.role,
        grade: user.grade_user_gradeIdTograde.grade,
        isActive: user.isActive,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      grade: {
        tutor: `${user.grade_user_gradeIdTograde.user_grade_tutorIdTouser.name} ${user.grade_user_gradeIdTograde.user_grade_tutorIdTouser.last_name}`,
        grade:user.grade_user_gradeIdTograde.grade,
        section:user.grade_user_gradeIdTograde.section,
        school_year:user.grade_user_gradeIdTograde.school_year,
      },
      notas: user.notas.map(nota => (
        {
          course: nota.gradeCourseId.cursoId.name,
          capacity: nota.capacity,
          competence: nota.competence,
          note: nota.note,
        }
      )),
    };

    return response;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  async remove(id: string) {
    await this.findOne(id);

    const user = await this.user.update({
      where: { id },
      data: { isActive: false },
    });

    delete user.password;
    return { user };

  }
}
