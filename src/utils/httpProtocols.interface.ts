export interface IHttpReponse<T> {
  statusCode: number;
  body: T | string;
}

export interface IHttpRequest<B> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: B;
}
