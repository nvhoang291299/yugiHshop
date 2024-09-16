import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { initializeApp } from 'firebase-admin/app';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  // eslint-disable-next-line no-restricted-syntax
  const port = configService.get<number>('PORT');

  initializeApp();
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(port, () => {
    Logger.log(`<<<<<<<<< Nest application listening on port ${port} >>>>>>>>>`);
  });
}

void bootstrap();
