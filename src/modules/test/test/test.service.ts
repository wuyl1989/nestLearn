import { Injectable, Logger } from '@nestjs/common';

import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import TestUser from 'src/entities/test/user-test.entity';
import V2Data from 'src/entities/test/v2ex-forum.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestUser) private userRepository: Repository<TestUser>,
    @InjectRepository(V2Data) private v2Repository: Repository<V2Data>,
  ) {}

  async getUserList() {
    return await this.userRepository.find();
  }

  async addUser(name: string, age: number) {
    const user = new TestUser();
    user.name = name;
    user.age = age;
    return await this.userRepository.save(user);
  }

  // async addV2Data(data: string) {
  //   const user = new V2Data();
  //   const jsonArray: [] = JSON.parse(data);
  //   jsonArray.forEach((element) => {
  //     user.id = element['id'];
  //     user.title = element['title'];
  //     user.content = element['content'];
  //   });
  //   return await this.v2Repository.save(user);
  //   // const user = new V2Data();
  //   // user.data = name;
  //   // return await this.userRepository.save(user);
  // }

  async addV2Data(data: string) {
    const jsonArray: [] = JSON.parse(data);
    const promises = jsonArray.map(async (element) => {
      const user = new V2Data();
      user.id = element['id'];
      user.title = element['title'];
      user.content = element['content'];
      return await this.v2Repository.save(user);
    });

    return Promise.all(promises);
  }
}
