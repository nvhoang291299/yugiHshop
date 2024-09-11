import { Module } from '@nestjs/common';
import { ProductService } from './card.service';
import { ProductController } from './card.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/database/entities/card.entity';
import { TypeCard } from 'src/database/entities/type-card.entity';
import { AttributeCard } from 'src/database/entities/attribute-card.entity';
import { FileModule } from '../file/file.module';
import { AttributeCardService } from '../attribute-card/attributeCard.service';
import { TypeCardService } from '../type-card/typeCard.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Card, TypeCard, AttributeCard]), FileModule],
  controllers: [ProductController],
  providers: [ProductService, AttributeCardService, TypeCardService],
})
export class ProductModule {}
