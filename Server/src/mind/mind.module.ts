import { Module } from '@nestjs/common';
import { MindService } from './mind.service';
import { MindController } from './mind.controller';

@Module({
  controllers: [MindController],
  providers: [MindService],
})
export class MindModule {}
