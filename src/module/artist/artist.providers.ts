import { ArtistEntity } from 'src/model/entity/Artist';
import { DataSource } from 'typeorm';

export const ArtistProviders = [
  {
    provide: 'ARTIST_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ArtistEntity),
    inject: ['DATA_SOURCE'],
  },
];
