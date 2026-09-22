import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const config = app.get(ConfigService);

  const isDevelopment = config.getOrThrow<string>("NODE_ENV") === 'development';
  const CORS_ORIGIN = config.getOrThrow<string>(`${isDevelopment ? "DEV_CORS_ORIGIN" : "PROD_CORS_ORIGIN"}`);
  const PORT = Number(config.getOrThrow<string>(`${isDevelopment ? "DEV_PORT" : "PROD_PORT"}`));

  app.enableCors({
    origin: CORS_ORIGIN
  })

  await app.listen(PORT);
}
await bootstrap();
