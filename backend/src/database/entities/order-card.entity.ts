import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Card } from './card.entity';

export class OrderCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Order, (order) => order.cards)
  order: Order;

  @ManyToOne(() => Card, (card) => card.id)
  card: Card;
}
