import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { ArtistService } from './artist.service';
import { ArtistProperties } from 'src/types/artist/ArtistProperties';

@Controller('/artist')
export class ArtistController implements DefaultControllerProperties {
  constructor(private readonly artistService: ArtistService) {}
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: ArtistProperties) {
    this.artistService.update(id, { ...value });
  }
  @Get()
  getAll(@Param('id') page: number) {
    return this.artistService.getAll(page);
  }
  @Post()
  save(@Body() value: ArtistProperties) {
    this.artistService.save(value);
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<ArtistProperties> {
    return this.artistService.getById(id);
  }
}
