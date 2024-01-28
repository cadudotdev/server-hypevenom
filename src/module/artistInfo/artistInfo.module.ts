import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArtistInfoController } from './artistInfo.controller';
import { ArtistInfoProviders } from './artistInfo.providers';
import { ArtistInfoService } from './artistInfo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ArtistInfoController],
  providers: [ArtistInfoService, ...ArtistInfoProviders],
})
export class ArtistInfoModule {}
