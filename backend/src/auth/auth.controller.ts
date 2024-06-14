import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';

import { Auth, GetUser } from './decorators';
import { ValidRoles } from './interfaces';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';





@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiResponse({ status: 201, description: 'User was created', type: UserDto })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden, Token' })
  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @ApiResponse({ status: 201, description: 'User was login', type: UserDto })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden, Token' })
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @ApiResponse({ status: 201, description: 'User was check-status and revalidate token', type: UserDto })
  @ApiResponse({ status: 400, description: 'BadRequest' })
  @ApiResponse({ status: 403, description: 'Forbidden, Token' })
  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() user
  ) {
    return this.authService.checkAuthStatus(user);
  }

  // @Get()
  // @UseGuards(AuthGuard())
  // findAll(
  //   // @Req() request: Express.Request
  //   @GetUser() user: User,
  //   @GetUser('email') userEmail: string,
  //   @RawHeadres() rawHeaders: string[],
  //   @Headers() headers: IncomingHttpHeaders
  // ) {

  //   return { user, userEmail, rawHeaders, headers };
  // }


  // @Get()
  // @RoleProtected(ValidRoles.superUser, ValidRoles.user)
  // @UseGuards(AuthGuard(), UserRoleGuard)
  // findAll(
  //   @GetUser() user: User,
  // ) {

  //   return { user,};
  // }

  // @Get()
  // @Auth(ValidRoles.student)
  // findAll(
  //   // @GetUser() user,
  // ) {

  //   return 'hola';
  // }

  // @Get(':id')
  // @Auth(ValidRoles.admin)
  // findOne(
  //   @Param('id') id: string,
  //   @GetUser() user,
  // ) {
  //   return {
  //     id,
  //     user
  //   }
  //   // return this.authService.findOne(+id);
  // }


}
