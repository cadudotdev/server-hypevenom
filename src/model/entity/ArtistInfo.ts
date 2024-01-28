import { ArtistInfoProperties } from 'src/types/artistInfo/ArtistInfoProperties';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artist-info')
export class ArtistInfo implements ArtistInfoProperties {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'timestamp' })
  age: Date;
  @Column()
  nationality: string;
  @Column()
  gender: string;
  @Column({ length: 2083 })
  description: string;
}
