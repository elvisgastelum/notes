import { createResponse } from './test-utils';

describe('test-utils.ts', () => {
  describe('createResponse()', () => {
    it('should return a valid response', () => {
      const response = createResponse<{ message: string }>({
        data: { message: 'pong' },
      });

      const expectedResponse = {
        data: { message: 'pong' },
        error: null,
      };

      expect(response).toEqual(expectedResponse);
    });
  });
});
