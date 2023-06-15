import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { LoginUserDto } from './dtos/login-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';



@Controller('auth')
export class AuthController {

    constructor( private readonly authService: AuthService ){}

    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // async login(@Request() req) {
    //   return req.user;
    // }


    // @UseGuards(LocalAuthGuard)
    // @Post('auth/login')
    // async login(@Request() req) {
    //   return req.user;
    // }

    
    // @UseGuards(LocalAuthGuard)
    // @Post('auth/login')
    // async login(@Request() req) {
    //   return this.authService.login(req.user);
    // }



    @Post('login')
    async login(@Body() loginDto: LoginDto) {
      const { username, password } = loginDto;
      const user = await this.authService.validateUser(username, password);
      const token = await this.authService.generateToken(user);
      return { token };
    }
  



    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }


}  
