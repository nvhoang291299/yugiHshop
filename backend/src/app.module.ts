import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ProductModule } from './modules/card/card.module';
// import typeOrmConfig from './database/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import {validate} from './config/configTypeOrm';
import { CacheModule } from '@nestjs/cache-manager';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { dataSourceOption } from './config/configTypeOrm.config';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AlbumModule } from './modules/album/album.module';
import { ProductController } from './modules/card/card.controller';
import { FileModule } from './modules/file/file.module';
import { AuthModule } from './modules/oauth2/auth.module';
// import { OrdersModule } from './modules/orders/orders.module';
// import { TransactionsModule } from './modules/transactions/transactions.module';
import { UserController } from './modules/user/user.controller';
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
    PassportModule.register({ session: true }),
    ProductModule,
    UserModule,
    AlbumModule,
    AuthModule,
    FileModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProductController, UserController);
  }
}
