import 'dotenv/config';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path/posix';

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '../../client', 'build')
      }
    ),
    MongooseModule.forRoot(process.env.MONGO_DB_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
