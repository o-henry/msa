import { NestFactory } from '@nestjs/core';
import { FsModule } from './fs.module';

async function bootstrap() {
  const app = await NestFactory.create(FsModule);
  await app.listen(3000);
}
bootstrap();
