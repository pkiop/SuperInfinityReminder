import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MindModule } from './mind/mind.module';

@Module({
  imports: [MindModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
