import { Role } from 'src/database/entities/role.entity';
import { User } from 'src/database/entities/user.entity';

export class UserDto {
  username?: string;

  fullName?: string;

  phoneNumber?: string;

  balance?: number;

  email?: string;

  avatar?: string;

  roles?: Role[];

  constructor(user: User) {
    this.username = user.username;
    this.fullName = user.fullName;
    this.phoneNumber = user.phoneNumber;
    this.balance = user.balance;
    this.avatar = user.avatar;
    this.roles = user.roles;
  }
}
