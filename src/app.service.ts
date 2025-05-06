import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Application is running!!!!',
      test: ':)',
      timestamp: new Date().toISOString(),
    };
  }

  getTest() {
    const randomQuote = faker.lorem.sentence();

    return {
      status: 'success',
      data: randomQuote,
      timestamp: new Date().toISOString(),
    };
  }
}
