import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from './base.schema';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album extends Base {
  @Prop()
  amount: number;

  @Prop([Object])
  products: [];

  @Prop()
  userId: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
