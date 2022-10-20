export type DataRequest<T = any> = {
  headers?: any;
  data: T;
  method: DataHttpVerbs;
  path: string;
};

export type DataResponse<T = any> = {
  status: DataUsedHttpStatusCode;
  data: T;
};

export interface DataHttpClient<T = any> {
  handle: (request: DataRequest<T>) => Promise<DataResponse<T>>;
}

export enum DataUsedHttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  unprocessableEntity = 422,
  internalError = 500,
}

export enum DataHttpVerbs {
  post = "post",
  delete = "delete",
  get = "get",
  put = "put",
}
