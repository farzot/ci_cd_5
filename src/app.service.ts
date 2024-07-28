import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBye(): string {
    return 'Goodbye World!';
  }
  getContact():string{
    return 'Contact Information: 123 Main St, City, State, 12345';
  }
}
