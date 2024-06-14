import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationWithRoleDto } from './dto/pagination-with-role.dto';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('AuthService');

  onModuleInit() {
    this.$connect();
    this.logger.log('Authservice connected to database')
  }


  async findAll(paginationWithRoleDto: PaginationWithRoleDto) {
    const { limit, page, role } = paginationWithRoleDto;

    const [totalUsers, users] = await Promise.all([
      this.user.count({ where: { isActive: true, role } }),
      this.user.findMany({
        where: { isActive: true, role },
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    users.forEach(user => delete user.password);

    const totalPages = Math.ceil(totalUsers / limit);

    return {
      totalUsers,
      page,
      totalPages,
      next: (totalUsers - (page * limit)) > 0 ? `api/users?page=${page + 1}&limit=${limit}&role=${role}` : null,
      prev: (page - 1 > 0) ? `api/users?page=${page - 1}&limit=${limit}&role=${role}` : null,
      users
    }
  }


  async findOneStudent(id: string) {
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
    // console.log(user);

    if (!user) throw new BadRequestException('User not found');

    const response = {
      user:{
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.findOneStudent(id);

    const user = await this.user.update({
      where: { id },
      data: { isActive: false },
    });

    delete user.password;
    return { user };
  }
}
