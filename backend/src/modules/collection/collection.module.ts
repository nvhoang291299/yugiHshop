import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionCard, CollectionCardSchema } from 'src/database/schemas/collectionCard.schema';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: CollectionCard.name, schema: CollectionCardSchema }])],
  controllers: [CollectionController],
  providers: [CollectionService],
  exports: [CollectionService],
})
export class CollectionModule {}
