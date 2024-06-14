import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';

@Injectable()
export class GradesService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('AuthService');

  onModuleInit() {
    this.$connect();
    this.logger.log('GradesService connected to database')
  }

  create(createGradeDto: CreateGradeDto) {
    return 'This action adds a new grade';
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;

    const [totalGrades, grades] = await Promise.all([
      this.grade.count(),
      this.grade.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    const totalPages = Math.ceil(totalGrades / limit);

    return {
      totalGrades,
      page,
      totalPages,
      next: (totalGrades - (page * limit)) > 0 ? `api/grades?page=${page + 1}&limit=${limit}` : null,
      prev: (page - 1 > 0) ? `api/grades?page=${page - 1}&limit=${limit}` : null,
      grades
    }
  }

  async findOne(id: string) {
    const gradeData = await this.grade.findUnique({
      where: { id },
      include: {
        user_grade_tutorIdTouser: {
          select: {
            id: true,
            name: true,
            last_name: true,
            email: true
          }
        },
        GradeCourse: {
          include: {
            cursoId: true
          }
        },
        user_user_gradeIdTograde: {
          select: {
            id: true,
            name: true,
            last_name: true,
            email: true
          }
        },
      }
    });

    if(!gradeData) throw new BadRequestException('Grade not found')

    return {
      id: gradeData.id,
      grade: gradeData.grade,
      section: gradeData.section,
      year: gradeData.school_year,
      tutor: {
        id: gradeData.user_grade_tutorIdTouser.id,
        name: gradeData.user_grade_tutorIdTouser.name,
        last_name: gradeData.user_grade_tutorIdTouser.last_name,
        email: gradeData.user_grade_tutorIdTouser.email
      },
      courses: gradeData.GradeCourse.map(course => (
        {
          id: course.cursoId.id,
          name: course.cursoId.name,
          idTeacher: course.userId
        }
      )),
      students: gradeData.user_user_gradeIdTograde.map(student => (
        {
          id: student.id,
          name: student.name,
          last_name: student.last_name,
          email: student.email
        }
      )),
    }
  }

  update(id: number, updateGradeDto: UpdateGradeDto) {
    return `This action updates a #${id} grade`;
  }

  remove(id: number) {
    return `This action removes a #${id} grade`;
  }
}
