import { ArtistInfoProperties } from './ArtistInfoProperties';

export interface ArtistInfoServiceProperties {
  getById(id: string): Promise<ArtistInfoProperties>;
  getAll(page: number): Promise<ArtistInfoProperties[]>;
  save(track: ArtistInfoProperties): void;
  update(id: string, value: ArtistInfoProperties): void;
}
