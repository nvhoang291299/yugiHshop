import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/database/entities/role.entity';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/user.entity';
import { BaseService } from '../base/base.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {
    super(userRepository);
  }

  async getUserByEmail(email: string) {
    const user = await this.findBy({ where: { email: email }, relations: { roles: true } });
    return user;
  }

  async createUser(user: UserDto) {
    const newUser = new User();
    const role = await this.roleRepository.findOne({ where: { id: 3 } });
    newUser.avatar = user.avatar;
    newUser.email = user.email;
    newUser.fullName = user.fullName;
    newUser.username = user.fullName;
    newUser.roles = [role];
    return await this.save(newUser);
  }

  async getProfile(id: number) {
    const user = await this.findBy({ where: { id: id }, relations: ['roles'], loadEagerRelations: true });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const userDto = new UserDto(user);
    return userDto;
  }

  // async editInfo(id: string, updateUser: UpdateUser) {
  //   const user = await this.userRepository.findOneBy({id})
  //   user.address = updateUser.address;
  //   user.fullName = updateUser.fullname;
  //   user.phoneNumber = updateUser.phoneNumber;
  //   user.username = updateUser.username;
  //   this.userRepository.save(user);
  // }
}
