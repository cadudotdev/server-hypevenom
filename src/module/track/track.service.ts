import { Inject, Injectable } from '@nestjs/common';
import { Track } from 'src/model/entity/Track';
import { TrackProperties } from 'src/types/track/TrackProperties';
import { TrackServiceProperties } from 'src/types/track/TrackServiceProperties';
import { Repository } from 'typeorm';

@Injectable()
export class TrackService implements TrackServiceProperties {
  constructor(
    @Inject('TRACK_REPOSITORY') private trackRepository: Repository<Track>,
  ) {}

  getById(id: string): Promise<TrackProperties> {
    return this.trackRepository.findOneBy({ id });
  }

  getAll(page: number): Promise<TrackProperties[]> {
    console.log(page);
    return this.trackRepository.find();
  }

  save(track: TrackProperties): void {
    this.trackRepository.save(track);
  }

  update(id: string, value: TrackProperties): void {
    this.trackRepository.update({ id }, value);
  }

  delete(id: string) {
    this.trackRepository.delete({ id });
  }
}
