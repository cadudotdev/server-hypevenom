import { INestApplication } from '@nestjs/common';

export function handleCors(app: INestApplication<any>) {
  process.env.DEVELOPMENT &&
    app.enableCors({
      origin: `http://localhost:${process.env.CLIENT_DEVELOPMENT_PORT}`,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type'],
    });
}
