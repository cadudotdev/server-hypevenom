import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ArtistInfoProperties } from 'src/types/artistInfo/ArtistInfoProperties';
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { ArtistInfoService } from './artistInfo.service';

@Controller('/artist-info')
export class ArtistInfoController implements DefaultControllerProperties {
  constructor(private readonly artistService: ArtistInfoService) {}
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: ArtistInfoProperties) {
    this.artistService.update(id, { ...value });
  }
  @Get()
  getAll(@Param('id') page: number) {
    return this.artistService.getAll(page);
  }
  @Post()
  save(@Body() value: ArtistInfoProperties) {
    this.artistService.save(value);
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<ArtistInfoProperties> {
    return this.artistService.getById(id);
  }
}
