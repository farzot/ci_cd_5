import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Get('bye')
  // getBye(): string {
  //   return this.appService.getBye();
  // }
  // @Get('contact')
  // getContact(): string {
  //   return this.appService.getContact();
  // }
  // @Get('allStuff')
  // getAllStuff(): string {
  //   return `Hello, ${this.appService.getHello()}! Bye, ${this.appService.getBye()}! Contact Information: ${this.appService.getContact()}`;
  // }
  @Get('thanks')
  getThanks(): string {
    return 'Thank you for visiting!';
  }
}
