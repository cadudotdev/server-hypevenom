import { Module } from '@nestjs/common';
import { ArtistProviders } from '../artist/artist.providers';
import { DatabaseModule } from '../database/database.module';
import { TrackController } from './track.controller';
import { TrackProviders } from './track.providers';
import { TrackService } from './track.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TrackController],
  providers: [TrackService, ...TrackProviders, ...ArtistProviders],
})
export class TrackModule {}
