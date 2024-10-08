import { IsArray, IsDecimal, IsNumber, IsString } from 'class-validator';
import { OrderStatus } from 'src/types/orderStatus.type';

export class CreateOrder {
  @IsString()
  status: string = OrderStatus.PENDING;

  @IsDecimal()
  total: number;

  @IsArray()
  orderCards: OrderCard[];
}

export class OrderCard {
  @IsDecimal()
  price: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  cardId: number;
}
