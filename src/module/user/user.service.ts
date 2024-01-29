import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/model/entity/User';
import { UserProperties } from 'src/types/user/UserProperties';
import { UserServiceProperties } from 'src/types/user/UserServiceProperties';
import { Repository } from 'typeorm';
import { generateCrypt, generateSalt } from '../../utils/security/bcrypt';

@Injectable()
export class UserService implements UserServiceProperties {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  getById(id: string): Promise<UserProperties> {
    return this.userRepository.findOneBy({ id });
  }

  getAll(page: number): Promise<UserProperties[]> {
    console.log(page);
    return this.userRepository.find();
  }

  async save(track: UserProperties): Promise<void> {
    const salt = await generateSalt(10);
    const hash = await generateCrypt(track.password, salt);

    track.password = hash;

    this.userRepository.save(track);
  }

  update(id: string, value: UserProperties): void {
    this.userRepository.update({ id }, value);
  }

  delete(id: string): void {
    this.userRepository.delete({ id });
  }

  findByUsername(username: string): Promise<UserProperties> {
    return this.userRepository.findOneBy({ username });
  }
}
