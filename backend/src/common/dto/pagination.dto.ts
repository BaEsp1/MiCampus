import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
  @ApiPropertyOptional({ type: Number, description: 'Page number', default: 1 })
  @IsPositive()
  @IsOptional()
  @Type(()=>Number)
  page?: number = 1;

  @ApiPropertyOptional({ type: Number, description: 'Number of items per page', default: 10 })
  @IsPositive()
  @IsOptional()
  @Type(()=>Number)
  limit?: number = 10;
}
