import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from 'axios';

export type RequestConfig = AxiosRequestConfig;

export type Response<T = never> = AxiosResponse<T>;

export class Request {
  constructor(private request: AxiosStatic = axios) {}

  public get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return this.request.get<T, Response<T>>(url, config);
  }

  public static isRequestError(error: AxiosError): boolean {
    return !!(error.response && error.response.status);
  }
}
