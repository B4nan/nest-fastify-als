import { Controller, Get, Post } from '@nestjs/common';
import { storage } from './storage';

@Controller()
export class AppController {
  @Get()
  async testGet() {
    const id = storage.getStore()?.id;
    console.log('get', id);
    return { id };
  }

  @Post()
  async testPost() {
    const id = storage.getStore()?.id;
    console.log('post', id);
    return { id };
  }
}
