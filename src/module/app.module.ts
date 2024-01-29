import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { ArtistInfoModule } from './artistInfo/artistInfo.module';
import { TrackModule } from './track/track.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TrackModule,
    ArtistModule,
    ArtistInfoModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
