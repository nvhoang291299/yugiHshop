import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { User } from '../../database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Role } from 'src/database/entities/role.entity';
// import { Transactions } from 'src/database/entities/transaction.entity';
// import { Orders } from 'src/database/entities/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), ConfigModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
