import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.ALLOWED_ORIGINS || 'http://localhost:5173';

  // Configurar CORS
  app.use(cors({
    origin: allowedOrigins
  }));

  await app.listen(3000);
}
bootstrap();
