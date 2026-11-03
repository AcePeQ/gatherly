import type { ApiErrorResponse } from "../../types/api";
import { ApiError } from "../errors/ApiError";

export async function throwApiError(
  response: Response,
  fallbackMessage: string,
): Promise<never> {
  const errorResponse: ApiErrorResponse = await response.json();
  const message = Array.isArray(errorResponse.message)
    ? errorResponse.message.join(" ")
    : errorResponse.message;

  throw new ApiError(
    message ?? fallbackMessage,
    response.status,
    errorResponse.errorCode,
  );
}
