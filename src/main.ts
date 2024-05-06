import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { EnvironmentService } from './configs';


class  Server{
  private static env = EnvironmentService.getAll();
  public static async start(): Promise<void> {
    const app = await NestFactory.create(AppModule, { cors: true });

    // Bootstrap.mountMiddlewares(app);
    Server.swaggerSetup(app);

    await app.listen(EnvironmentService.getValue('PORT'));
    await app.startAllMicroservices();
  }


  // Swagger configuration
  private static swaggerSetup(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Ehizua School API')
    .setDescription('Backend api for Tutor, Partner Schools and Students')
    .setVersion('1.0')
    .addTag('Ehizua Tutor API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  }

}

Server.start().then();