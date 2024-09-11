import { Role } from 'src/database/entities/role.entity';

export interface IJwtPayload {
  id: number;
  email: string;
  fullName: string;
  username: string;
  roles: Role[];
}
