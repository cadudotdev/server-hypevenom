import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Artist } from './Artist';
import { TrackProperties } from 'src/types/track/TrackProperties';

@Entity()
export class Track implements TrackProperties {
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
  @ManyToMany(() => Artist)
  @JoinTable()
  artists: Artist[];
}
