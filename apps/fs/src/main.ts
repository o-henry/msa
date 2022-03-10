import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FsModule } from './fs.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FsModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen();
}
bootstrap();
