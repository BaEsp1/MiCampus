import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class NotesService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('NotesService');

  onModuleInit() {
    this.$connect();
    this.logger.log('NotesService connected to database')
  }
  create(createNoteDto: CreateNoteDto) {
    return 'This action adds a new note';
  }

  async findNotesByTeacherAndCourse(idTeacher: string, IdCourse: string, IdGrade: string){
    const teacherCourses = await this.gradeCourse.findMany({
      where: {
        userId: idTeacher,
        grade_id: IdGrade,
        courseId: IdCourse,
      },
    });

    const califications = await this.notas.findMany({
      where: {
        gradeCourse_id: { in: teacherCourses.map(tc => tc.id) }
      },
      include:{
        studentId: {
          select: {
            name: true,
            last_name: true,
            id: true,
          }
        }
      },
      orderBy: {
        studentId: {
          last_name: 'asc',
        },
      },
    })

    return califications.map(calification => (
        {
          id: calification.id,
          capacity: calification.capacity,
          competence: calification.competence,
          note: calification.note,
          last_name: calification.studentId.last_name,
          name: calification.studentId.name,
        }
      ))

  }

  findAll() {
    return `This action returns all notes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
