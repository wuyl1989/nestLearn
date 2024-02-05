import * as fs from 'fs';
import * as path from 'path';
import { Injectable, Logger } from '@nestjs/common';

import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

import * as cheerio from 'cheerio';

const axios = require('axios');

@Injectable()
export class SpiderService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async findAll() {
    const urls: string[] = [];
    const baseUrl = 'https://www.v2ex.com/';
    // const baseUrl = 'https://www.baidu.com/';
    const getCosPlay = async () => {
      const body = await axios.get(baseUrl).then(async (res) => res.data);
      Logger.log(body);
      const $ = cheerio.load(body);
      // console.log($('.article-content p img').length);
      // 查找id为"box"的元素
      const boxElement = $('#box');
      // 查找class为"box item"的所有元素
      const boxItemElements = boxElement.find('.box.item');
      // 存储class为"item_title"的元素内容的数组
      const itemTitleArray = [];
      // 遍历并获取class为"item_title"的元素内容
      boxItemElements.each((index, element) => {
        const itemTitleElement = $(element).find('.item_title');
        const itemTitle = itemTitleElement.text();
        itemTitleArray.push(itemTitle);
      });
      // 打印数组中的元素内容
      Logger.log(itemTitleArray);
    };

    await getCosPlay();
    // console.log(urls);
    // Logger.log(urls);
    // this.writeFiles(urls)
    return `cos`;
  }

  // async getData() {
  //   // const res: any = this.httpService
  //   //   .get('https://www.v2ex.com/api/topics/hot.json')
  //   //   .pipe(map((res) => res));
  //   // // console.log(res); // 这里直接打印不出来数据格式的，都是映射函数,需要用subscribe观察
  //   // // res.subscribe((val) => console.log(val));// 订阅观察了，就可以打印出来
  //   // Logger.log(JSON.stringify(res));
  //   // return res;

  //   try {
  //     const response = await this.httpService
  //       .get('https://www.v2ex.com/api/topics/hot.json')
  //       .toPromise();
  //     Logger.log(response.data);
  //   } catch (error) {
  //     Logger.log(error);
  //   }
  // }

  async getData() {
    const url = 'http://shop-dev.zhuoyou.com/api/v1/banners?position=21';
    // const url = 'https://www.v2ex.com/api/topics/hot.json';

    try {
      const response = await this.httpService.get(url).subscribe((res) => {
        Logger.log(JSON.stringify(res.data));
      });
      // Logger.log(response.data);
      // return response.data;
    } catch (error) {
      Logger.log(error);
      throw error;
    }
  }
}
