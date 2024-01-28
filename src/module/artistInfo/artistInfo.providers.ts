import { ArtistInfo } from 'src/model/entity/ArtistInfo';
import { DataSource } from 'typeorm';

export const ArtistInfoProviders = [
  {
    provide: 'ARTIST_INFO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ArtistInfo),
    inject: ['DATA_SOURCE'],
  },
];
