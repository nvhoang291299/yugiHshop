import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CardDTO } from 'src/modules/card/model/card.dto';
import { Base } from './base.schema';

export type CollectionDocument = HydratedDocument<CollectionCard>;

@Schema({ collection: 'collection_cards' })
export class CollectionCard extends Base {
  @Prop({ type: [CardDTO], required: true })
  cards: CardDTO[];

  @Prop()
  userId: string;
}

export const CollectionCardSchema = SchemaFactory.createForClass(CollectionCard);
