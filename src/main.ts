import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './module/app.module';

config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
