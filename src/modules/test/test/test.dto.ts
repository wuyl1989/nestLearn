import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsInt, IsArray } from 'class-validator';
import { isString } from 'lodash';

export class TestDto {
  @ApiProperty({
    required: false,
    description: '用户呢称',
  })
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    description: '用户年龄',
  })
  @IsInt()
  age: number;
}

export class V2Dto {
  @ApiProperty({
    required: true,
    description: '数组',
  })
  @IsString()
  data: string;
}
