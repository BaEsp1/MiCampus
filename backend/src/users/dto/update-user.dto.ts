// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/auth/dto';


export class UpdateUserDto extends PartialType(CreateUserDto) {}
