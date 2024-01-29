import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { ArtistInfoModule } from './artistInfo/artistInfo.module';
import { TrackModule } from './track/track.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TrackModule, ArtistModule, ArtistInfoModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
