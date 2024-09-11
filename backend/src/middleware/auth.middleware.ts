import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const verifyToken = req.headers?.authorization.split(' ')[1];
    console.log(verifyToken);
    if (verifyToken) {
      axios
        .get(process.env.GOOGLE_TOKENINFO_URL + `?access_token=${verifyToken}`)
        .then(function () {
          next();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      throw new UnauthorizedException();
    }
  }
}
