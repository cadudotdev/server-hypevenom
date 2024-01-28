import { ArtistProperties } from './ArtistProperties';

export interface ArtistServiceProperties {
  getById(id: string): Promise<ArtistProperties>;
  getAll(page: number): Promise<ArtistProperties[]>;
  save(track: ArtistProperties): void;
  update(id: string, value: ArtistProperties): void;
}
