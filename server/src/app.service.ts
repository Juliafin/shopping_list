import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  async getHello(): Promise<any> {
    const { data }  = await firstValueFrom(this.httpService.get('https://jsonplaceholder.typicode.com/todos/1'))

    return data
    
  }
}
