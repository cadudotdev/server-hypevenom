import { DataSource } from 'typeorm';
import { TrackEntity } from 'src/model/entity/Track';
import { ArtistEntity } from 'src/model/entity/Artist';
import { ArtistInfo } from 'src/model/entity/ArtistInfo';
import { User } from 'src/model/entity/User';

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
        entities: [TrackEntity, ArtistEntity, ArtistInfo, User],
        synchronize: true,
        logging: false,
        subscribers: [],
        migrations: [],
      });

      return dataSource.initialize();
    },
  },
];
