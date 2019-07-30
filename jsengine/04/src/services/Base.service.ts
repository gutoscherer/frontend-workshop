import { IHttpAdapter } from "../adapter/IHttp.adapter";

export abstract class BaseService<K> {
  protected httpAdapter: IHttpAdapter;

  constructor(httpAdapter: IHttpAdapter) {
    this.httpAdapter = httpAdapter;
  }

  abstract async getAll(): Promise<K[]>;
}
