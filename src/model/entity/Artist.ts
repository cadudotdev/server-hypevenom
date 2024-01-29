import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArtistInfo } from './ArtistInfo';
import { Track } from './Track';
import { ArtistProperties } from 'src/types/artist/ArtistProperties';

@Entity()
export class Artist implements ArtistProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  artistName: string;
  @Column({ length: 2083 })
  imageLink: string;
  @OneToOne(() => ArtistInfo)
  @JoinColumn()
  info: ArtistInfo;
  @ManyToMany(() => Track, () => Track)
  @JoinTable()
  track: Track[];
}
