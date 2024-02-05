import { Module } from '@nestjs/common';
import { SpiderModule } from '../../test/spider/spider.module';
import { TaskService } from './task.service';
@Module({
  imports: [SpiderModule],
  providers: [TaskService],
})
export class TaskModule {}
