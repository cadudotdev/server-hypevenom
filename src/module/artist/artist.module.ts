import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArtistController } from './artist.controller';
import { ArtistProviders } from './artist.providers';
import { ArtistService } from './artist.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ArtistController],
  providers: [ArtistService, ...ArtistProviders],
})
export class ArtistModule {}
