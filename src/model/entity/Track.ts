import { TrackProperties } from 'src/types/track/TrackProperties';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArtistEntity } from './Artist';

@Entity()
export class TrackEntity implements TrackProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column('timestamp')
  releaseDate: Date;
  @Column({ length: 2083 })
  iframLink: string;
  @Column({ length: 2083 })
  imageLink: string;
  @ManyToMany(() => ArtistEntity, { eager: true })
  @JoinTable()
  artists: ArtistEntity[];
}
