import { TrackProperties } from './TrackProperties';

export interface TrackServiceProperties {
  getById: (id: string) => Promise<TrackProperties>;
  getAll: (page: number) => Promise<TrackProperties[]>;
  save: (track: TrackProperties) => void;
  delete(id: string): void;
}
