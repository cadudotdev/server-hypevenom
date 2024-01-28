import { ArtistInfoProperties } from '../ArtistInfoProperties';
import { TrackProperties } from '../track/TrackProperties';

export interface ArtistProperties {
  id: string;
  name: string;
  artistName: string;
  imageLink: string;
  info: ArtistInfoProperties;
  track: TrackProperties[];
}
