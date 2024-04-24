import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,) {}

  async validateUser(userData: any): Promise<any> {
    const logDate = new Date().toLocaleString();
    if (userData.username === 'user' && userData.password === 'password'){
      const payload = { username: userData.username, password:userData.passwrod, Date: logDate };
      return {access_token: this.jwtService.sign(payload)}; 
    }
      else return { message: 'Username or password is wrong'}; 
  }
 
  getLoggedUserInfo(userData: any): any { return {ID: 1, username: userData.username, Date:userData.Date };}
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_secret_key', 
    });
  }

  async validate(payload: any) { return {username: payload.username, Date: payload.Date };}

}

