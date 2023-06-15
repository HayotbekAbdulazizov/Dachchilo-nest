import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Post()
  async create(@Body() createBuildingDto: CreateBuildingDto) {
    const building = this.buildingsService.create(createBuildingDto);
    return building;
  }

  @Get()
  findAll() {
    return this.buildingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingDto: UpdateBuildingDto) {
    return this.buildingsService.update(+id, updateBuildingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingsService.remove(+id);
  }
}
