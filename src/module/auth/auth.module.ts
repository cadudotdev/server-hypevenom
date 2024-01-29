import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ArtistModule } from '../artist/artist.module';
import { ArtistInfoModule } from '../artistInfo/artistInfo.module';
import { DatabaseModule } from '../database/database.module';
import { TrackModule } from '../track/track.module';
import { UserModule } from '../user/user.module';
import { UserProviders } from '../user/user.providers';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    DatabaseModule,
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
  providers: [AuthService, UserService, ...UserProviders],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
