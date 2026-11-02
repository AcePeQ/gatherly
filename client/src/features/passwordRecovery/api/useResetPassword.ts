import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { ResetPasswordResponse } from "../../../types/auth";

type ResetPasswordRequest = {
  password: string;
  token: string;
}

export function useResetPassword() {
  const { isPending, mutate: resetPassword } = useMutation({
    mutationFn: resetPasswordApi,
  })

  return { isPending, resetPassword }
}

async function resetPasswordApi(resetPasswordData: ResetPasswordRequest): Promise<ResetPasswordResponse> {
  const { password, token } = resetPasswordData;

  try {
    const res = await fetch(`${API_URL}/auth/reset-password`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ password, token }),
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
