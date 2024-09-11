import { Role } from 'src/database/entities/role.entity';

export class UserDto {
  username?: string;

  password?: string;

  fullName?: string;

  phoneNumber?: string;

  balance?: number;

  email?: string;

  avatar?: string;

  roles?: Role[];
}
