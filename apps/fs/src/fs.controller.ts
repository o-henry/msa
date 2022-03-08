import { Controller, Get } from '@nestjs/common';
import { FsService } from './fs.service';

@Controller()
export class FsController {
  constructor(private readonly fsService: FsService) {}

  @Get()
  getHello(): string {
    return this.fsService.getHello();
  }
}
