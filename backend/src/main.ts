import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // forbidNonWhitelisted: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Institucion educativa')
    .setDescription('API para institucion educativa')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: (origin, callback) => {
      // Permitir solicitudes desde Vercel, localhost y orígenes nulos (Postman)
      if (!origin || origin === 'https://mi-campus.vercel.app' || /localhost:\d+$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // https://mi-campus.vercel.app/

  await app.listen(envs.port);

  logger.log(`API is running on port ${envs.port}`)
}
bootstrap();
