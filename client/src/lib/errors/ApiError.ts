export class ApiError extends Error {
  readonly statusCode: number;
  readonly errorCode?: string;

  constructor(
    message: string,
    statusCode: number,
    errorCode?: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}
