import { Track } from 'src/model/entity/Track';
import { DataSource } from 'typeorm';

export const TrackProviders = [
  {
    provide: 'TRACK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Track),
    inject: ['DATA_SOURCE'],
  },
];
