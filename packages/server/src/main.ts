import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const serverStartLabel = 'Server App Started in';
  console.time(serverStartLabel);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const env = configService.get('nodeEnv');
  const port = configService.get<number>('port');
  const corsOptions = configService.get<CorsOptions>('corsOptions');
  app.enableCors(corsOptions);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.disable('x-powered-by');
  await app.listen(port);
  console.timeEnd(serverStartLabel);
  console.log(`\u001b[32m App is running at http://localhost:${port} in ${env} mode\u{1b}[0m`);
}
bootstrap();
