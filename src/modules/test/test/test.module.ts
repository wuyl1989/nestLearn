import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SystemModule } from '../../admin/system/system.module';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import TestUser from '@/entities/test/user-test.entity';
import V2Data from '@/entities/test/v2ex-forum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser, V2Data])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
