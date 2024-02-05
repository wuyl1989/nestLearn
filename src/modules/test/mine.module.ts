import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { TaskModule } from './task/task.module';
import { SpiderService } from './spider/spider.service';
import { SpiderModule } from './spider/spider.module';
@Module({
  imports: [TestModule, TaskModule, SpiderModule],
  providers: [SpiderService],
})
export class MineModule {}
