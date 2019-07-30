import { IHttpAdapter } from "./IHttp.adapter";

export class XMLHttpRequestAdapter implements IHttpAdapter {
  public async Get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status <= 300) {
          resolve(JSON.parse(xhr.response));
        }
        reject(xhr.response);
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
}
