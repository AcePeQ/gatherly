import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { ForgotPasswordResponse } from "../../../types/auth";
import type { ForgotPasswordFormValues } from "../schemas/forgotPasswordSchema";

export function useForgotPassword() {
  const { isPending, isError, error, mutate: forgotPassword } = useMutation({
    mutationFn: forgotPasswordApi,
  })

  return { isPending, isError, error, forgotPassword }
}

async function forgotPasswordApi(forgotPasswordData: ForgotPasswordFormValues): Promise<ForgotPasswordResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/forgot-password`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(forgotPasswordData),
    })

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const message = Array.isArray(error.message) ? error.message.join(" ") : error.message;
      throw new Error(message ?? "Could not send a password reset link!")
    }

    const data: ForgotPasswordResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}