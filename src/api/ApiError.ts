export class ApiError extends Error {
  errorCode: number;

  constructor(message: string, errorCode: number) {
    super(message);
    this.name = 'ApiError';
    this.errorCode = errorCode;
  }
}
