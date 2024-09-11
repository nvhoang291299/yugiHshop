import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { GoogleRequest } from './model/googleRequest.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/signin')
  handleLoginGoogle(@Res() res: Response) {
    const url = this.authService.generateAuthUrl();
    res.redirect(url);
  }
  // api/auth/google/verify
  @Get('google/callback')
  async handleCallback(@Query() request: GoogleRequest) {
    try {
      const res = await this.authService.handleCallback(request);
      return res;
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }
  // @Get('facebook/login')
  // @UseGuards(OAuthGuard)
  // handleLoginFacebook() {
  //   return { msg: 'Facebook Authentication' };
  // }
  // // api/auth/facebook/redirect
  // @Get('facebook/redirect')
  // @UseGuards(OAuthGuard)
  // handleRedirectfb() {
  //   return { msg: 'OK' };
  // }
}
