import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionCard } from 'src/database/schemas/collectionCard.schema';
import { CardDTO } from '../card/model/card.dto';

@Injectable()
export class CollectionService {
  constructor(@InjectModel('CollectionCard') private collectionModel: Model<CollectionCard>) {}

  async addToCollection(userId: number, cardDTOs: CardDTO[]): Promise<CollectionCard> {
    const document = await this.collectionModel.findOne({ userId: userId });
    if (!document) {
      const cards = cardDTOs.map((card) => {
        const f = {
          card: card,
          quantity: card.quantity,
        };
        return f;
      });
      const newDocument = new this.collectionModel({ userId: userId, cards: cards });
      return newDocument.save();
    }
    const existedCards = document.cards;
    const card = this.mergeCards(existedCards, cardDTOs);
    return await this.collectionModel.findByIdAndUpdate(document._id, { cards: card });
  }

  async collectionByUserId(userId: number) {
    const document = await this.collectionModel.findOne({ userId: userId.toString() });
    return document.cards;
  }

  mergeCards(existedCards, cardDTOs) {
    cardDTOs.forEach((card) => {
      const matchingCard = existedCards.find((item) => item.card.cardCode === card.cardCode);

      if (matchingCard) {
        matchingCard.quantity += card.quantity;
      } else {
        existedCards.push({
          card: card,
          quantity: card.quantity,
        });
      }
    });
    return existedCards;
  }
}
