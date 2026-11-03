import { useMutation } from "@tanstack/react-query";

import { API_URL } from "../../../config/apiConfig";
import { throwApiError } from "../../../lib/api/throwApiError";
import type { ForgotPasswordResponse } from "../../../types/auth";
import type { ForgotPasswordFormValues } from "../schemas/forgotPasswordSchema";

export function useForgotPassword() {
  const { isPending, isError, error, mutate: forgotPassword } = useMutation({
    mutationFn: forgotPasswordApi,
  });

  return { isPending, isError, error, forgotPassword };
}

async function forgotPasswordApi(
  forgotPasswordData: ForgotPasswordFormValues,
): Promise<ForgotPasswordResponse> {
  const response = await fetch(`${API_URL}/auth/forgot-password`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(forgotPasswordData),
  });

  if (!response.ok) {
    await throwApiError(response, "Could not send a password reset link.");
  }

  const data: ForgotPasswordResponse = await response.json();

  return data;
}
