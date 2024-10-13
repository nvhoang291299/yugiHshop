import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from './base.schema';

export type CollectionDocument = HydratedDocument<CollectionCard>;

@Schema({ collection: 'collection_cards' })
export class CollectionCard extends Base {
  @Prop({ type: [], required: true })
  cards: [];

  @Prop()
  userId: string;
}

export const CollectionCardSchema = SchemaFactory.createForClass(CollectionCard);
