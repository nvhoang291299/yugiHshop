import { AttributeCardService } from './../attribute-card/attributeCard.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { FileService } from '../file/file.service';
import { CreateCardRequest } from './model/createCardRequest.model';
import { BaseService } from '../base/base.service';
import { Card } from 'src/database/entities/card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeCardService } from '../type-card/typeCard.service';

@Injectable()
export class ProductService extends BaseService<Card> {
  constructor(
    @InjectRepository(Card) private readonly productRepository: Repository<Card>,
    private readonly httpService: HttpService,
    private readonly fileService: FileService,
    private readonly attributeCardService: AttributeCardService,
    private readonly typeCardService: TypeCardService,
  ) {
    super(productRepository);
  }

  async findAll(): Promise<any> {
    const { data } = await firstValueFrom(this.httpService.get(`http://localhost:8081/data`));

    return data;
  }

  async findById(id): Promise<any> {
    const { data } = await firstValueFrom(this.httpService.get(`http://localhost:8081/data?id=${id}`));

    return data;
  }

  async createCard(request: CreateCardRequest) {
    const attribute = await this.attributeCardService.getAttribute(request.attribute);
    const type = await this.typeCardService.getType(request.type);
    const newCard = new Card();
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
