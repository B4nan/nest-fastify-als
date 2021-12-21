import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('Middleware should bind to the same custom property', () => {
  let i = 1;
  describe('Fastify', () => {
    let app: NestFastifyApplication;
    let url: string;
    beforeAll(async () => {
      const modRef = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
      app = modRef.createNestApplication(new FastifyAdapter());
      await app.listen(0);
      url = await app.getUrl();
    });
    afterAll(async () => {
      await app.close();
    });

    it('should have a custom property for GET', async () => {
      await pactum
        .spec()
        .get(url)
        .expectJson({
          id: i++,
        });
    });
    it('should have a custom property for POST', async () => {
      await pactum
        .spec()
        .post(url)
        .expectJson({
          id: i++,
        });
    });
  });
});
