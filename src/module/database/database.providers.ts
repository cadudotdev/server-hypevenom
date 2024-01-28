import { DataSource } from 'typeorm';
import { Track } from 'src/model/entity/Track';
import { Artist } from 'src/model/entity/Artist';
import { ArtistInfo } from 'src/model/entity/ArtistInfo';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [Track, Artist, ArtistInfo],
        synchronize: true,
        logging: false,
        subscribers: [],
        migrations: [],
      });

      return dataSource.initialize();
    },
  },
];
