import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistInfoProperties } from 'src/types/artistInfo/ArtistInfoProperties';
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { ArtistInfoService } from './artistInfo.service';

@Controller('/artist-info')
export class ArtistInfoController implements DefaultControllerProperties {
  constructor(private readonly artistInfoService: ArtistInfoService) {}
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: ArtistInfoProperties) {
    this.artistInfoService.update(id, { ...value });
  }
  @Get()
  getAll(@Param('id') page: number) {
    return this.artistInfoService.getAll(page);
  }
  @Post()
  save(@Body() value: ArtistInfoProperties) {
    this.artistInfoService.save(value);
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<ArtistInfoProperties> {
    return this.artistInfoService.getById(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.artistInfoService.delete(id);
  }
}
