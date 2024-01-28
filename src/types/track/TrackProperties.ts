import { ArtistProperties } from '../artist/ArtistProperties';

export interface TrackProperties {
  id: string;
  title: string;
  releaseDate: Date;
  iframLink: string;
  imageLink: string;
  artists: ArtistProperties[];
}
