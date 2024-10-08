import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../entities/user.entity';
import { Base } from './base.schema';

export type LogOrdersDocument = HydratedDocument<Log_Orders>;

@Schema()
export class Log_Orders extends Base {
  @Prop()
  stateOrder: string;

  @Prop()
  price: string;

  @Prop()
  amount: number;

  @Prop()
  idProduct: string;

  @Prop()
  user: User;
}

export const LogOrdersSchema = SchemaFactory.createForClass(Log_Orders);
