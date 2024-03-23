import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getMain() {
    return {};
  }
  @Get('dynamic')
  @Render('dynamic')
  getIndex() {
    return {message:'Index Page' };
  }
}
