import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { ResetPasswordResponse } from "../../../types/auth";
import type { ResetPasswordFormValues } from "../schemas/resetPasswordSchema";

export function useResetPassword() {
  const { isPending, isError, error, mutate: resetPassword } = useMutation({
    mutationFn: resetPasswordApi,
  })

  return { isPending, isError, error, resetPassword }
}

async function resetPasswordApi(resetPasswordData: ResetPasswordFormValues): Promise<ResetPasswordResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/reset-password`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(resetPasswordData),
    })

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const message = Array.isArray(error.message) ? error.message.join(" ") : error.message;
      throw new Error(message ?? "Could not reset your password!")
    }

    const data: ResetPasswordResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}