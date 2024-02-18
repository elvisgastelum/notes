import { createResponse } from '@api/test-utils';
import { GetPingData } from '@api/types';
import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getPing', () => {
    it('should return "pong"', () => {
      const response = createResponse<GetPingData>({
        data: { message: 'pong' },
      });

      expect(service.getPing()).toEqual(response);
    });
  });
});
