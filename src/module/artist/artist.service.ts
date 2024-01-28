import { Inject, Injectable } from '@nestjs/common';
import { Artist } from 'src/model/entity/Artist';
import { ArtistProperties } from 'src/types/artist/ArtistProperties';
import { ArtistServiceProperties } from 'src/types/artist/ArtistServiceProperties';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService implements ArtistServiceProperties {
  constructor(
    @Inject('ARTIST_REPOSITORY') private artistRepository: Repository<Artist>,
  ) {}

  getById(id: string): Promise<ArtistProperties> {
    return this.artistRepository.findOneBy({ id });
  }

  getAll(page: number): Promise<ArtistProperties[]> {
    console.log(page);
    return this.artistRepository.find();
  }

  save(track: ArtistProperties): void {
    this.artistRepository.save(track);
  }

  update(id: string, value: ArtistProperties): void {
    this.artistRepository.update({ id }, value);
  }

  delete(id: string): void {
    this.artistRepository.delete({ id });
  }
}
