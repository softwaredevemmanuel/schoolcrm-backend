import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Ehizua School API')
    .setDescription('Backend api for partner schools and students')
    .setVersion('1.0')
    .addTag('Ehizua School API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(5000);
}
bootstrap();
