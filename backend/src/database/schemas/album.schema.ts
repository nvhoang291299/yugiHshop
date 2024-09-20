import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from './base.schema';
import { Card } from '../entities/card.entity';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album extends Base {
  @Prop([Card])
  products: [];

  @Prop()
  userId: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
