import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MindService } from './mind.service';
import { CreateMindDto } from './dto/create-mind.dto';
import { UpdateMindDto } from './dto/update-mind.dto';

@Controller('mind')
export class MindController {
  constructor(private readonly mindService: MindService) {}

  @Post()
  create(@Body() createMindDto: CreateMindDto) {
    return this.mindService.create(createMindDto);
  }

  @Get()
  findAll() {
    return this.mindService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mindService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMindDto: UpdateMindDto) {
    return this.mindService.update(+id, updateMindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mindService.remove(+id);
  }
}
