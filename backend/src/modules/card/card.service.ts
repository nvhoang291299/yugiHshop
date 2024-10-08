import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/database/entities/card.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { FileService } from '../file/file.service';
import { TypeCardService } from '../type-card/typeCard.service';
import { AttributeCardService } from './../attribute-card/attributeCard.service';
import { CreateCardRequest } from './model/createCardRequest.model';

@Injectable()
export class CardService extends BaseService<Card> {
  private readonly logger = new Logger(CardService.name);
  constructor(
    @InjectRepository(Card) private readonly productRepository: Repository<Card>,
    private readonly fileService: FileService,
    private readonly attributeCardService: AttributeCardService,
    private readonly typeCardService: TypeCardService,
  ) {
    super(productRepository);
  }

  async getListProduct() {}

  async getProduct(id: number) {
    try {
      const card = await this.findBy({
        where: { id: id },
      });
      return card;
    } catch (error) {
      this.logger.error(`Card ${id} not exist.`);
      throw new BadRequestException('Card not found.', error);
    }
  }

  async createCard(request: CreateCardRequest, imageUrl: Express.Multer.File) {
    const file = this.fileService.uploadFile(imageUrl);
    console.log('file', file);

    const attribute = await this.attributeCardService.getAttribute(request.attribute);
    const type = await this.typeCardService.getType(request.type);
    const newCard = new Card();
    newCard.cardCode = request.cardCode;
    newCard.name = request.name;
    newCard.atk = request.atk;
    newCard.def = request.def;
    newCard.attribute = attribute;
    newCard.description = request.description;
    newCard.imageUrl = request.imageUrl;
    newCard.level = request.level;
    newCard.ownerBy = request.ownerBy;
    newCard.type = type;
    newCard.price = request.price;
    // await this.fileService.uploadFile(imageUrl);
    return await this.save(newCard);
  }
}
