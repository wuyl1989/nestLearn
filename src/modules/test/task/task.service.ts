import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { SpiderService } from '../spider/spider.service';

@Injectable()
export class TaskService {
  constructor(private readonly spiderService: SpiderService) {}

  @Cron('*/1 * * * *')
  handleCron() {
    // Logger.log('Called when the current second is 45s');
    Logger.log('Called every five minutes');
    Logger.log(this.spiderService.getHello());
    // this.spiderService.findAll();
    // this.spiderService.getData();
  }
}
