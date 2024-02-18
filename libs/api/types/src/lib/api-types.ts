export type ResponseOf<
  Data,
  Error = { message: string; code: string; statusCode: number }
> = { data: Data; error: null } | { data: null; error: Error };
