import { Module } from '@nestjs/common';
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
import { AlbumModule } from './modules/album/album.module';
import { FileModule } from './modules/file/file.module';
import { AuthModule } from './modules/oauth2/auth.module';
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
export class AppModule {}
