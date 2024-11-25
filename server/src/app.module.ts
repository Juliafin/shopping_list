import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path/posix';

@Module({
  imports: [HttpModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../../client', 'build')
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
