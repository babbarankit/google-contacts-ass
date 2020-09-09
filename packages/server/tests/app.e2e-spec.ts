import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { NestApplication } from '@nestjs/core';

describe('AppController (e2e)', () => {
  let app: NestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('/ (GET)', (done) => {
    return request(app.getHttpServer()).get('/').expect(404).end(done);
  });

  it('/health (GET)', (done) => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect({ status: 'live' })
      .end(done);
  });

  afterAll(async () => {
    return await app.close();
  }, 1000);
});
