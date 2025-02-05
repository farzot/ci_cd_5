import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('thank')
  getThanks(): string {
    return this.appService.getThank();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bye')
  getBye(): string {
    return this.appService.getBye();
  }
  @Get('contact')
  getContact(): string {
    return this.appService.getContact();
  }
  @Get('allStuff')
  getAllStuff(): string {
    return `Hello, ${this.appService.getHello()}! Bye, ${this.appService.getBye()}! Contact Information: ${this.appService.getContact()}`;
  }
  @Get('thankAll')
  getThankAll(): string {
    return `Thank you, ${this.appService.getHello()}! Thank you, ${this.appService.getBye()}! Contact Information: ${this.appService.getContact()}`;
  }
  @Get('thankContact')
  getThankContact(): string {
    return `Thank you, ${this.appService.getHello()}! Contact Information: ${this.appService.getContact()}`;
  }
}
