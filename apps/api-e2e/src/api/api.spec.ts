import { createResponse } from '@api/test-utils';
import { GetRootData } from '@api/types';
import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);
    const expextedResponse = createResponse<GetRootData>({
      data: { service: 'notes-api', version: '0.0.1' },
    });

    expect(res.status).toBe(200);
    expect(res.data).toEqual(expextedResponse);
  });
});
