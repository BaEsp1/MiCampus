import { ApiProperty } from "@nestjs/swagger";


export class User {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  birthdate: Date | null;
  dni: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  id_grade: string | null;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class UserDto {
  @ApiProperty()
  user: User;

  @ApiProperty()
  token: string

}



