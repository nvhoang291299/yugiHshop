import { IsNumber, IsString } from 'class-validator';
import { OrderStatus } from 'src/types/orderStatus.type';

export class ChangeStatus {
  @IsNumber()
  id: number;

  @IsString()
  status: string = OrderStatus.COMPLETED;
}
