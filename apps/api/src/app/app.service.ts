import { GetPingData, ResponseOf, GetRootData } from '@api/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): ResponseOf<GetRootData> {
    return {
      data: { service: 'notes-api', version: '0.0.1' },
      error: null,
    };
  }

  getPing(): ResponseOf<GetPingData> {
    return { data: { message: 'pong' }, error: null };
  }
}
