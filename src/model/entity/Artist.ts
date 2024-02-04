import { ArtistProperties } from 'src/types/artist/ArtistProperties';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArtistInfo } from './ArtistInfo';

@Entity()
export class ArtistEntity implements ArtistProperties {
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
  @Column({ length: 2083 })
  description: string;
}
