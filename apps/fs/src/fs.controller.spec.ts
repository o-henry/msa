import { Test, TestingModule } from '@nestjs/testing';
import { FsController } from './fs.controller';
import { FsService } from './fs.service';

describe('FsController', () => {
  let fsController: FsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FsController],
      providers: [FsService],
    }).compile();

    fsController = app.get<FsController>(FsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fsController.getHello()).toBe('Hello World!');
    });
  });
});
