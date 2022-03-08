import { Injectable } from '@nestjs/common';

@Injectable()
export class FsService {
  getHello(): string {
    return 'Hello World!';
  }
}
