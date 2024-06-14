import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/common";


export class PaginationWithRoleDto extends PaginationDto {
  @ApiPropertyOptional({ enum: Role, description: 'Role of the user' })
  @IsOptional()
  @IsEnum(Role, { message: 'Role must be either TEACHER or STUDENT' })
  role: Role;
}

