import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'user_test' })
export default class TestUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  // @Column({ unique: true })
  // @ApiProperty()
  // username: string;

  @Column()
  @ApiProperty()
  age: number;
}
