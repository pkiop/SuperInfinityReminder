import { Test, TestingModule } from '@nestjs/testing';
import { MindService } from './mind.service';

describe('MindService', () => {
  let service: MindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MindService],
    }).compile();

    service = module.get<MindService>(MindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
