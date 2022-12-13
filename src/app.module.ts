/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from './http.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
],
})
export class AppModule {}
