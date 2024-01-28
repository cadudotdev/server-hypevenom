import { Inject, Injectable } from '@nestjs/common';
import { ArtistInfo } from 'src/model/entity/ArtistInfo';
import { ArtistInfoProperties } from 'src/types/artistInfo/ArtistInfoProperties';
import { ArtistInfoServiceProperties } from 'src/types/artistInfo/ArtistInfoServiceProperties';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistInfoService implements ArtistInfoServiceProperties {
  constructor(
    @Inject('ARTIST_INFO_REPOSITORY')
    private artistRepository: Repository<ArtistInfo>,
  ) {}

  getById(id: string): Promise<ArtistInfoProperties> {
    return this.artistRepository.findOneBy({ id });
  }

  getAll(page: number): Promise<ArtistInfoProperties[]> {
    console.log(page);
    return this.artistRepository.find();
  }

  save(track: ArtistInfoProperties): void {
    this.artistRepository.save(track);
  }

  update(id: string, value: ArtistInfoProperties): void {
    this.artistRepository.update({ id }, value);
  }
}
