import { PageableDto } from 'src/database/models/pageable.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionCard } from 'src/database/schemas/collectionCard.schema';
import { CardDTO } from '../card/model/card.dto';
import { PageDto } from 'src/database/models/page.dto';

@Injectable()
export class CollectionService {
  constructor(@InjectModel('CollectionCard') private collectionModel: Model<CollectionCard>) {}

  async addToCollection(userId: number, cards: CardDTO): Promise<CollectionCard> {
    // TODO: kiem tra xe card da ton tai hay chua neu chua ton tai thi add vao acc neu da ton tai thi cong vao quantity
    const collection = await this.collectionModel.find({ userId: userId });
    if (!collection) {
      const newCollection = new this.collectionModel({ userId: userId, cards: cards });
      return newCollection.save();
    }
    console.log(
      collection.map((co) => {
        co.cards;
      }),
    );
    return;
  }
  // TODO: list collection
  async collectionsByUserId(userId: number, pageableDto: PageableDto) {
    // const collections = await this.collectionModel
    //   .find({ userId: userId.toString() })
    //   .skip(pageableDto.skip)
    //   .limit(pageableDto.take);
    // return new PageDto(collections, { itemCount, pageableDto });
  }
  // TODO: detail card
}
