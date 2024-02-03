import { ArtistEntity } from 'src/model/entity/Artist';

export interface TrackProperties {
  id: string;
  title: string;
  releaseDate: Date;
  iframLink: string;
  imageLink: string;
  artists: ArtistEntity[];
}
