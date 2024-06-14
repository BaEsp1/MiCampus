import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { initialData } from './data/seed-data';

import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class SeedService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('SeedService');


  constructor(
  ) {
    super();
  }
  onModuleInit() {
    this.$connect();
    this.logger.log('Seed connected to database')
  }

  async runSeed() {
    await this.deleteTables();
    await this.InsertNewTeachers();
    await this.InsertNewCourses();
    await this.InsertGrades();
    await this.InsertNewStudents();
    await this.InsertAdmin();
    await this.InsertNewGradeCourse();
    await this.InsertNotes();
    return 'Seed executed';
  }

  async deleteTables() {
    await this.notas.deleteMany();
    await this.gradeCourse.deleteMany();
    await this.course.deleteMany();
    await this.grade.deleteMany();
    await this.user.deleteMany();
  }

  private async InsertAdmin() {
    const seedAdmin = initialData.admin

    seedAdmin.forEach(async admin => {
      await this.user.create({
        data: {
          ...admin,
          password: bcrypt.hashSync(admin.password, 10),
          role: 'ADMIN'
        }
      })
    });
  }

  private async InsertNewTeachers() {
    const seedTeacher = initialData.teachers;

    seedTeacher.forEach(async teacher => {
      await this.user.create({
        data: {
          ...teacher,
          password: bcrypt.hashSync(teacher.password, 10),
          role: 'TEACHER'
        }
      })
    });
  }

  private async InsertNewCourses() {
    const courses = initialData.courses;

    const insertPromises = [];
    courses.forEach(course => {
      insertPromises.push(this.course.create({ data: course }));
    });

    await Promise.all(insertPromises);
    return true;
  }

  private randomNumber(limit: number): number {
    const random = Math.random();
    const randomNumber = Math.floor(random * (limit - 1));
    return randomNumber;
  }



  private async InsertNewStudents() {
    const students = initialData.students;
    const grades = await this.grade.findMany()

    const insertPromises = [];
    students.forEach(student => {
      insertPromises.push(this.user.create({
        data: {
          ...student,
          password: bcrypt.hashSync(student.password, 10),
          gradeId: grades[this.randomNumber(grades.length)].id
        }
      }));
    });

    await Promise.all(insertPromises);
    return true;
  }

  private async InsertNewGradeCourse() {
    const courses = await this.course.findMany()
    const grades = await this.grade.findMany()
    const teachers = await this.user.findMany({ where: { role: 'TEACHER' } })
    const totales = teachers.length;

    const insertPromises = [];
    courses.forEach(async course => {
      grades.forEach(async grade => {
        insertPromises.push(this.gradeCourse.create({
          data: {
            grade_id: grade.id,
            userId: teachers[this.randomNumber(totales)].id,
            courseId: course.id
          }
        }));
        // const resutl = await this.gradeCourse.create({
        //   data: {
        //     grade_id: grade.id,
        //     userId: teachers[this.randomNumber(totales)].id,
        //     courseId: course.id
        //   }
        // })
        // console.log(resutl);

      })
    })
    await Promise.all(insertPromises);
  }

  private async InsertGrades() {
    const grades = initialData.grades;

    const teachers = await this.user.findMany({ where: { role: 'TEACHER' } })
    const totales = teachers.length;

    const insertPromises = [];
    grades.forEach(grade => {
      insertPromises.push(this.grade.create({
        data: {
          ...grade,
          tutorId: teachers[this.randomNumber(totales)].id

        }
      }));
    });

    await Promise.all(insertPromises);
    return true;
  }

  private async InsertNotes() {
    const students = await this.user.findMany({
      where: { role: 'STUDENT' },
      include: {
        grade_user_gradeIdTograde: {
          include: {
            GradeCourse: true
          }

        }
      }
    })

    students.forEach(async student => {
      student.grade_user_gradeIdTograde.GradeCourse.forEach(async course => {
        await this.notas.create({
          data: {
            gradeCourse_id: course.id,
            userId: student.id,
            note: this.randomNumber(22),
            competence: 'evaluacion 1'
          }
        })
      })
    })

  }
}
