import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TrackProviders } from './track.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TrackController],
  providers: [TrackService, ...TrackProviders],
})
export class TrackModule {}
