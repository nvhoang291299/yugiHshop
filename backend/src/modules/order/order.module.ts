import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderCard } from 'src/database/entities/order-card.entity';
import { Order } from 'src/database/entities/order.entity';
import { CardModule } from '../card/card.module';
import { CollectionModule } from '../collection/collection.module';
import { UserModule } from '../user/user.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderCard]), UserModule, CardModule, CollectionModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
