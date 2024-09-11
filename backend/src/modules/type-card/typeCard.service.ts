import { TypeCard } from 'src/database/entities/type-card.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypeCardService extends BaseService<TypeCard> {
  constructor(@InjectRepository(TypeCard) private readonly typeCardRepository: Repository<TypeCard>) {
    super(typeCardRepository);
  }

  async getType(id: number) {
    return await this.findById(id);
  }
}
