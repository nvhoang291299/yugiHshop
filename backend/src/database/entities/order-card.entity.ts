import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Card } from './card.entity';

@Entity()
export class OrderCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Order, (order) => order.orderCards)
  order: Order;

  @ManyToOne(() => Card, (card) => card.id, { eager: true })
  card: Card;
}
