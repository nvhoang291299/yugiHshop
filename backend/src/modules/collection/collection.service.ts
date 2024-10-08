import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionCard } from 'src/database/schemas/collectionCard.schema';
import { CardDTO } from '../card/model/card.dto';

@Injectable()
export class CollectionService {
  constructor(@InjectModel('CollectionCard') private collectionModel: Model<CollectionCard>) {}

  async addToCollection(userId: number, cards: CardDTO): Promise<CollectionCard> {
    // TODO: kiem tra xe card da ton tai hay chua neu chua ton tai thi add vao acc neu da ton tai thi cong vao quantity
    const newCollection = new this.collectionModel({ userId: userId, cards: cards });
    return newCollection.save();
  }
  // TODO: list collection
  async collectionsByUserId(userId) {}

  // TODO: detail card
}
