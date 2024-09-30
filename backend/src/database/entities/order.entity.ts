import { Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base/baseEntity.entity';
import { OrderCard } from './order-card.entity';
import { User } from './user.entity';

export class Order extends BaseEntity {
  @Column()
  status: string;

  @Column()
  total: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @OneToMany(() => OrderCard, (orderCard) => orderCard.order)
  cards: OrderCard[];
}
