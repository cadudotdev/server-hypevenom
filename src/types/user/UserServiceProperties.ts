import { UserProperties } from './UserProperties';

export interface UserServiceProperties {
  getById(id: string): Promise<UserProperties>;
  getAll(page: number): Promise<UserProperties[]>;
  save(track: UserProperties): void;
  update(id: string, value: UserProperties): void;
  delete(id: string): void;
  findByUsername(username: string): Promise<UserProperties>;
}
