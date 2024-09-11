import { Injectable } from '@nestjs/common';
import { AttributeCard } from 'src/database/entities/attribute-card.entity';
import { BaseService } from '../base/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AttributeCardService extends BaseService<AttributeCard> {
  constructor(@InjectRepository(AttributeCard) private readonly typeCardRepository: Repository<AttributeCard>) {
    super(typeCardRepository);
  }

  async getAttribute(id: number) {
    return await this.findById(id);
  }
}
