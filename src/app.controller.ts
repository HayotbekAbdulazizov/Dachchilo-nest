import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';



@Controller()
export class AppController {

  @Get('protected')
  @UseGuards(AuthGuard())
  
  protectedRoute() {
    return 'This is a protected route';
  }
}