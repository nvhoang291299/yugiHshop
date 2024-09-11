import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base/baseEntity.entity';
import { Role } from './role.entity';
import { IsOptional } from 'class-validator';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  username?: string;

  @Column({ nullable: true })
  @IsOptional()
  password?: string;

  @Column()
  fullName?: string;

  @Column({ nullable: true })
  @IsOptional()
  phoneNumber?: string;

  @Column({ default: 0 })
  balance?: number;

  @Column()
  email?: string;

  @Column({ nullable: true })
  @IsOptional()
  avatar?: string;

  //   @OneToMany(() => Transactions, (transactions) => transactions.user)
  //   transactions: Transactions[];

  //   @OneToMany(() => Orders, (orders) => orders.user)
  //   order: Orders[];

  @ManyToMany(() => Role, (role) => role.users, { cascade: true })
  @JoinTable()
  roles?: Role[];
}
