import { Artist } from 'src/model/entity/Artist';
import { DataSource } from 'typeorm';

export const ArtistProviders = [
  {
    provide: 'ARTIST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Artist),
    inject: ['DATA_SOURCE'],
  },
];
