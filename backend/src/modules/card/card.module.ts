import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/database/entities/card.entity';
import { TypeCard } from 'src/database/entities/type-card.entity';
import { AttributeCard } from 'src/database/entities/attribute-card.entity';
import { AttributeCardService } from '../attribute-card/attributeCard.service';
import { TypeCardService } from '../type-card/typeCard.service';
import { FileModule } from '../file/file.module';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Card, TypeCard, AttributeCard]), FileModule],
  controllers: [CardController],
  providers: [CardService, AttributeCardService, TypeCardService],
  exports: [CardService],
})
export class CardModule {}
