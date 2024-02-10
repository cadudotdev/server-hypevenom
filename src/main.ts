import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { handleCors } from './utils/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  handleCors(app);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
