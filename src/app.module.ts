import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { storage, state } from './storage';

@Module({
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((_req: any, _res: any, next: any) => {
        const id = state.counter++;
        console.log('In Middleware with id ' + id);
        storage.run({ id }, next);
      })
      .forRoutes('(.*)');
  }
}
