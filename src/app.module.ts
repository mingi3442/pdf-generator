import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateController } from './generate/generate.controller';
import { GenerateService } from './generate/generate.service';

@Module({
  imports: [],
  controllers: [AppController, GenerateController],
  providers: [AppService, GenerateService],
})
export class AppModule {}
