export type ApiErrorResponse = {
  message: string | string[];
  statusCode: number;
  errorCode?: string;
};
