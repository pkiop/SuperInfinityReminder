import { Test, TestingModule } from '@nestjs/testing';
import { MindController } from './mind.controller';
import { MindService } from './mind.service';

describe('MindController', () => {
  let controller: MindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MindController],
      providers: [MindService],
    }).compile();

    controller = module.get<MindController>(MindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
