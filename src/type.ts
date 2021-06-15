export interface IResponce<T> {
  code: number;
  message: string;
  result: T;
}
