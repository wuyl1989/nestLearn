import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'v2ex_forum' })
export default class V2Data extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  content: string;

  @Column({ default: 0 })
  @ApiProperty()
  replies: number;

  @Column({ default: 0 })
  @ApiProperty()
  last_modified: number;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  last_reply_by: string;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  username: string;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  useravatar: string;

  @Column({ default: 0 })
  @ApiProperty()
  userid: number;

  @Column({ nullable: true, default: '' })
  @ApiProperty()
  node: string;

  @Column({ default: 0 })
  @ApiProperty()
  nodeid: number;
}
