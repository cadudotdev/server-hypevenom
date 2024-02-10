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
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { TrackService } from './track.service';
import { TrackProperties } from 'src/types/track/TrackProperties';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/track')
export class TrackController implements DefaultControllerProperties {
  constructor(private readonly trackService: TrackService) {}

  @Get('/:id')
  getById(@Param('id') id: string): Promise<TrackProperties> {
    return this.trackService.getById(id);
  }

  @Get()
  getAll(@Param('id') page: number) {
    return this.trackService.getAll(page);
  }

  @UseGuards(AuthGuard)
  @Post()
  save(@Body() value: TrackProperties) {
    this.trackService.save(value);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: TrackProperties) {
    this.trackService.update(id, { ...value });
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.trackService.delete(id);
  }

  @Get('/related-artist/:id')
  getAllTracksRelatedToArtist(@Param('id') id: string): Promise<unknown> {
    return this.trackService.getAllTracksRelatedToArtist(id);
  }
}
