import { BadRequestException, Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import { GoogleRequest } from './model/googleRequest.model';
import { User } from 'src/database/entities/user.entity';
import { IJwtPayload } from './type/jwtPayload.type';
import { IJwtToken } from './type/jwtToken.type';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private oauth2Client: OAuth2Client;

  constructor(private readonly userService: UserService) {
    this.oauth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URL,
    );
  }

  generateAuthUrl() {
    const authUrl = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email'],
    });
    return authUrl;
  }

  async handleCallback(request: GoogleRequest) {
    const { tokens } = await this.oauth2Client.getToken(request.code);
    if (!tokens) {
      throw new BadRequestException('Google token is invalid!');
    }

    const ticket = await this.oauth2Client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    this.oauth2Client.setCredentials(tokens);
    const payload = ticket.getPayload();
    let user: UserDto = await this.userService.getUserByEmail(payload.email);

    if (!user) {
      user = {
        email: payload?.email,
        avatar: payload?.picture,
        fullName: payload?.name,
        username: payload?.name,
      };
      await this.userService.createUser(user);
    }

    const token = this.generateJwtToken(user);
    return token;
  }

  generateJwtToken(user: User) {
    const payload: IJwtPayload = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      username: user.username,
      roles: user.roles,
    };
    this.createAccessToken(payload);
    this.createRefreshToken(payload);

    const tokens: IJwtToken = {
      accessToken: this.createAccessToken(payload),
      refreshToken: this.createRefreshToken(payload),
    };
    return tokens;
  }

  createAccessToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  }
  createRefreshToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  }
}
