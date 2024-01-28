import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { TrackService } from './track.service';
import { TrackProperties } from 'src/types/track/TrackProperties';

@Controller('/track')
export class TrackController implements DefaultControllerProperties {
  constructor(private readonly trackService: TrackService) {}
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: TrackProperties) {
    this.trackService.update(id, { ...value });
  }
  @Get()
  getAll(@Param('id') page: number) {
    return this.trackService.getAll(page);
  }
  @Post()
  save(@Body() value: TrackProperties) {
    this.trackService.save(value);
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<TrackProperties> {
    return this.trackService.getById(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.trackService.delete(id);
  }
}
