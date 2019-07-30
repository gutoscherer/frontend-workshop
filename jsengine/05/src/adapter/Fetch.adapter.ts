import { IHttpAdapter } from "./IHttp.adapter";

export class FetchAdapter implements IHttpAdapter {
  public async Get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return (await response.json()) as T;
  }
}
