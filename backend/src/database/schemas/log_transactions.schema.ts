import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from './base.schema';

export type LogTransactionsDocument = HydratedDocument<Log_Transactions>;

@Schema()
export class Log_Transactions extends Base {
  @Prop()
  stateTrans: string;

  @Prop()
  typeTrans: string;

  @Prop()
  price: string;

  @Prop()
  nameBank: string;

  @Prop()
  userId: string;
}

export const LogTransactionsSchema = SchemaFactory.createForClass(Log_Transactions);
