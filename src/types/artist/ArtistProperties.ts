import { ArtistInfoProperties } from '../artistInfo/ArtistInfoProperties';

export interface ArtistProperties {
  id: string;
  name: string;
  artistName: string;
  imageLink: string;
  info: ArtistInfoProperties;
}
