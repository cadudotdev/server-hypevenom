import { INestApplication } from '@nestjs/common';

export function handleCors(app: INestApplication<any>) {
  process.env.DEVELOPMENT &&
    app.enableCors({
      origin: ['http://localhost:8080'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type'],
    });
}
