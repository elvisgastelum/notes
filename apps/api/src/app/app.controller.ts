import { GetPingData, ResponseOf, GetRootData } from '@api/types';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): ResponseOf<GetRootData> {
    return this.appService.getRoot();
  }

  @Get('/ping')
  getPing(): ResponseOf<GetPingData> {
    return this.appService.getPing();
  }
}
