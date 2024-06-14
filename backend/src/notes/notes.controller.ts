import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Califications')
@Controller('califications')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  // @Post()
  // create(@Body() createNoteDto: CreateNoteDto) {
  //   return this.notesService.create(createNoteDto);
  // }

  // @Get()
  // findAll() {
  //   return this.notesService.findAll();
  // }

  @Get('idTeacher/:idTeacher/idCourse/:IdCourse/IdGrade/:IdGrade')
  findNotesByTeacherAndCourse(@Param('idTeacher') idTeacher: string, @Param('IdCourse') IdCourse: string, @Param('IdGrade') IdGrade: string) {
    return this.notesService.findNotesByTeacherAndCourse(idTeacher, IdCourse, IdGrade);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
  //   return this.notesService.update(+id, updateNoteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notesService.remove(+id);
  // }
}
