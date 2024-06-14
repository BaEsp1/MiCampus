import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common';

@ApiTags('Grades')
@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) { }

  @Post()
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @Get()
  findAll(
    @Query() paginationDto: PaginationDto
) {
    return this.gradesService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.gradesService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
  //   return this.gradesService.update(+id, updateGradeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.gradesService.remove(+id);
  // }
}
