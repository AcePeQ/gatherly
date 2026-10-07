import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { LoginFormValues } from "../schemas/loginSchema";
import type { LoginResponse } from "../../../types/auth";

export function useLogin() {
  const { isPending, isError, error, mutate: loginFn } = useMutation({
    mutationFn: loginApi,
  })

  return { isPending, isError, error, loginFn }
}

async function loginApi(loginData: LoginFormValues): Promise<LoginResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(loginData),
      credentials: "include"
    })

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const message = Array.isArray(error.message) ? error.message.join(" ") : error.message;
      throw new Error(message ?? "Could not login into the account")
    }

    const data: LoginResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}