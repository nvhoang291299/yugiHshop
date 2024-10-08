import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { CardModule } from './modules/card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { MongooseModule } from '@nestjs/mongoose';
import { dataSourceOption } from './config/configTypeOrm.config';
import { CollectionModule } from './modules/collection/collection.module';
import { FileModule } from './modules/file/file.module';
import { AuthModule } from './modules/oauth2/auth.module';
import { OrderModule } from './modules/order/order.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.host', '.env.database'],
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    TypeOrmModule.forRoot(dataSourceOption),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`,
    ),
    CacheModule.register(),
    CardModule,
    UserModule,
    CollectionModule,
    AuthModule,
    FileModule,
    OrderModule,
  ],
})
export class AppModule {}
