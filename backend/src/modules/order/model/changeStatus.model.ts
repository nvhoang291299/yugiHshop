import { IsNumber, IsString } from 'class-validator';
import { OrderStatus } from 'src/types/orderStatus.type';

export class ChangeStatus {
  @IsNumber()
  orderId: number;

  @IsString()
  status: string = OrderStatus.COMPLETED;
}
