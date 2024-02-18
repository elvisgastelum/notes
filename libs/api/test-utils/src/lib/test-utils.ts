import { ResponseOf } from '@api/types';

export const createResponse = <
  Data,
  Error = {
    message: string;
    code: string;
    statusCode: number;
  }
>({
  data = null,
  error = null,
}: {
  data?: Data | null;
  error?: Error | null;
}): ResponseOf<Data, Error> => {
  if (data) {
    return { data, error: null };
  }

  if (error) {
    return { data: null, error };
  }

  throw new Error('Either data or error must be provided');
};
