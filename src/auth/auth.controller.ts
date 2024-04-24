import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor( private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req): Promise<any> {
    const body = req.body;
    return await this.authService.validateUser(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user-info')
  getLoggedUserInfo(@Request() req): any {
    const user = req.user;
    return  this.authService.getLoggedUserInfo(user);
  }
}
