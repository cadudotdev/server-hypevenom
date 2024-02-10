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
import { ArtistService } from './artist.service';
import { ArtistProperties } from 'src/types/artist/ArtistProperties';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/artists')
export class ArtistController implements DefaultControllerProperties {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/:id')
  getById(@Param('id') id: string): Promise<ArtistProperties> {
    return this.artistService.getById(id);
  }

  @Get()
  getAll(@Param('id') page: number) {
    return this.artistService.getAll(page);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: ArtistProperties) {
    this.artistService.update(id, { ...value });
  }

  @UseGuards(AuthGuard)
  @Post()
  save(@Body() value: ArtistProperties) {
    this.artistService.save(value);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.artistService.delete(id);
  }
}
