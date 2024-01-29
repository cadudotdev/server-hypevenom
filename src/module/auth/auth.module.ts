import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { TrackModule } from '../track/track.module';
import { ArtistModule } from '../artist/artist.module';
import { ArtistInfoModule } from '../artistInfo/artistInfo.module';

@Module({
  imports: [
    UserModule,
    TrackModule,
    ArtistModule,
    ArtistInfoModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
