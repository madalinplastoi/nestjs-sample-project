import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const globalPrefix = "api";
    app.setGlobalPrefix(globalPrefix);

    const options = new DocumentBuilder()
        .setTitle("NestJS Sample - OpenAPI specification")
        .setDescription("The API description")
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("swagger", app, document);

    app.enableCors();

    const port = 3000;
    const env = 'development';
    await app.listen(3000);

    console.info(`🚀 Application is running on: http://localhost:${port}/${globalPrefix} using ${env} environment`)
}

bootstrap();
