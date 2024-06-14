import { Controller, Get, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';

import { UpdateUserDto } from './dto/update-user.dto';
import { ValidRoles } from 'src/auth/interfaces';
import { Auth, GetUser } from 'src/auth/decorators';
import { ApiTags } from '@nestjs/swagger';
import { PaginationWithRoleDto } from './dto/pagination-with-role.dto';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // @Auth(ValidRoles.student)
  findAll(
    @Query() paginationWithRoleDto: PaginationWithRoleDto
    // @GetUser() user,
  ) {
    return this.usersService.findAll(paginationWithRoleDto);
  }



  @Get('student/:id')
  // @Auth(ValidRoles.student)
  findOneStudent(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOneStudent(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
