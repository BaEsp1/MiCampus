import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';

@Injectable()
export class TeachersService extends PrismaClient implements OnModuleInit{
  private readonly logger = new Logger('AuthService');

  onModuleInit() {
    this.$connect();
    this.logger.log('TeacherService connected to database')
  }


  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;

    const [totalTeachers, teachers] = await Promise.all([
      this.user.count({ where: { isActive: true, role:'TEACHER' } }),
      this.user.findMany({
        where: { isActive: true, role:'TEACHER' },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    teachers.forEach(user => delete user.password);

    const totalPages = Math.ceil(totalTeachers / limit);

    return {
      totalTeachers,
      page,
      totalPages,
      next: (totalTeachers - (page * limit)) > 0 ? `api/teachers?page=${page + 1}&limit=${limit}` : null,
      prev: (page - 1 > 0) ? `api/teachers?page=${page - 1}&limit=${limit}` : null,
      teachers
    }
  }

  async findOne(id: string) {
    const teacherData = await this.user.findUnique({
      where: { id , role: 'TEACHER'},
      include: {
        grade_grade_tutorIdTouser: true,
        GradeCursos: {
          include: {
            cursoId: true,
            gradeId: true
          }
        }
      }
    });




    if(!teacherData) throw new BadRequestException('Teacher not found')

    return {
      teacher: {
        id: teacherData.id,
        name: teacherData.name,
        last_name: teacherData.last_name,
        email: teacherData.email,
        dni: teacherData.dni,
        birthdate: teacherData.birthdate,
        role: teacherData.role,
        isActive: teacherData.isActive,
        createdAt: teacherData.createdAt,
        updatedAt: teacherData.updatedAt,
      },
      tutorships: teacherData.grade_grade_tutorIdTouser?.map(teacher => (
        {
          grade: teacher.grade,
          section: teacher.section,
          school_year: teacher.school_year,
        }
      )),
      courses: teacherData.GradeCursos.map(teacher => (
        {
          courseId: teacher.cursoId.id,
          course: teacher.cursoId.name,
          gradeId: teacher.gradeId.id,
          grade: teacher.gradeId.grade,
          section: teacher.gradeId.section,
          school_year: teacher.gradeId.school_year,
        }
      ))
    }
  }



  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
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
