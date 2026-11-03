import { useMutation } from "@tanstack/react-query";

import { API_URL } from "../../../config/apiConfig";
import { throwApiError } from "../../../lib/api/throwApiError";
import type { RegisterResponse } from "../../../types/auth";
import type { RegisterFormValues } from "../schemas/registerSchema";

export function useRegister() {
  const { isPending, isError, error, mutate: registerUser } = useMutation({
    mutationFn: registerUserApi,
  });

  return { isPending, isError, error, registerUser };
}

async function registerUserApi(
  registrationData: RegisterFormValues,
): Promise<RegisterResponse> {
  const response = await fetch(`${API_URL}/auth/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(registrationData),
  });

  if (!response.ok) {
    await throwApiError(response, "Could not create your account.");
  }

  const data: RegisterResponse = await response.json();

  return data;
}
