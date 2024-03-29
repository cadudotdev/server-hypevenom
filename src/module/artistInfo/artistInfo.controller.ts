import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ArtistInfoProperties } from 'src/types/artistInfo/ArtistInfoProperties';
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { ArtistInfoService } from './artistInfo.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/artist-info')
export class ArtistInfoController implements DefaultControllerProperties {
  constructor(private readonly artistInfoService: ArtistInfoService) {}

  @Get('/:id')
  getById(@Param('id') id: string): Promise<ArtistInfoProperties> {
    return this.artistInfoService.getById(id);
  }

  @Get()
  getAll(@Param('id') page: number) {
    return this.artistInfoService.getAll(page);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: ArtistInfoProperties) {
    this.artistInfoService.update(id, { ...value });
  }

  @UseGuards(AuthGuard)
  @Post()
  save(@Body() value: ArtistInfoProperties) {
    this.artistInfoService.save(value);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.artistInfoService.delete(id);
  }
}
