import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength, Validate } from "class-validator";

export class CreateUserDto {

  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  last_name: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
  })
  password: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date) // This will transform the incoming value to a Date object
  @IsOptional()
  birthdate?: Date;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  dni: string;

  @ApiProperty({})
  @IsUUID()
  @IsOptional()
  id_grade?: string;
}
