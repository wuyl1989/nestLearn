import { inspect } from 'util';
import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  Logger,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FastifyRequest } from 'fastify';
import { Authorize } from '../../admin/core/decorators/authorize.decorator';
import { TestService } from './test.service';
import { TestDto, V2Dto } from './test.dto';

@ApiTags('学习模块')
@Controller('test')
@Authorize()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @ApiOkResponse({ type: String })
  @ApiOperation({ summary: '测试' })
  @Get('/test')
  @Authorize()
  test() {
    Logger.log('ttttttsss 123');
    return 'test11223';
  }

  // @ApiOkResponse({ type: String })
  @ApiOperation({ summary: '增加数据' })
  @Post('/addTest')
  @Authorize()
  async addTest(
    @Body() dto: TestDto,
    // @Body() name: string,

    // @Req() req: FastifyRequest,
    // @Headers('user-agent') ua: string,
  ): Promise<void> {
    // Logger.log(' logTest' + name);
    // Logger.log(`logTest2${name}`);
    Logger.log(' logTest' + dto.age + dto.name);
    Logger.log(`var: ${inspect(dto)}`);
    await this.testService.addUser(dto.name, dto.age);
    // await this.testService.addUser(dto.name, dto.age);
  }

  @Get('/getUserList')
  @Authorize()
  async getUserList() {
    return await this.testService.getUserList();
  }

  @Post('/addV2')
  @Authorize()
  async addV2(
    @Body() dto: V2Dto,
    // @Body() name: string,

    // @Req() req: FastifyRequest,
    // @Headers('user-agent') ua: string,
  ): Promise<void> {
    // Logger.log(' logTest' + name);
    // Logger.log(`logTest2${name}`);
    Logger.log(' logTest' + dto.data);
    Logger.log(`var: ${inspect(dto)}`);
    await this.testService.addV2Data(dto.data);
    // await this.testService.addUser(dto.name, dto.age);
  }
}
