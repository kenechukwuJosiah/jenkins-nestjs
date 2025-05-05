import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly service: PlacesService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePlaceDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePlaceDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.service.delete(id);
    return { message: 'Deleted successfully' };
  }
}
