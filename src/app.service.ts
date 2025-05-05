import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Application is running!!!!',
      test: ':)',
      timestamp: new Date().toISOString(),
    };
  }
}
