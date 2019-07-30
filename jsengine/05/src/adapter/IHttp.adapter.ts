export interface IHttpAdapter {
  Get<T>(url: string): Promise<T>;
}
