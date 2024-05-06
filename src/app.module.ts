import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';

@Module({
  imports: [
    AdminModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
