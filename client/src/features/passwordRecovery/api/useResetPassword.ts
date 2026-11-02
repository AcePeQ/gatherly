import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { ResetPasswordResponse } from "../../../types/auth";

type ResetPasswordRequest = {
  password: string;
  token: string;
};

export function useResetPassword() {
  const { isPending, mutate: resetPassword } = useMutation({
    mutationFn: resetPasswordApi,
  });

  return { isPending, resetPassword };
}

async function resetPasswordApi(
  resetPasswordData: ResetPasswordRequest,
): Promise<ResetPasswordResponse> {
  const { password, token } = resetPasswordData;

  const response = await fetch(`${API_URL}/auth/reset-password`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ password, token }),
  });

  if (!response.ok) {
    const errorResponse: ApiErrorResponse = await response.json();
    const message = Array.isArray(errorResponse.message)
      ? errorResponse.message.join(" ")
      : errorResponse.message;

    throw new Error(message ?? "Could not reset your password!");
  }

  const data: ResetPasswordResponse = await response.json();

  return data;
}
