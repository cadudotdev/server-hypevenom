import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { ArtistInfoModule } from './artistInfo/artistInfo.module';

@Module({
  imports: [TrackModule, ArtistModule, ArtistInfoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
