import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { LogoutRequest, LogoutResponse } from "../../../types/auth";

export function useLogin() {
  const { isPending, isError, error, mutate: logoutFn } = useMutation({
    mutationFn: logoutApi,
  })

  return { isPending, isError, error, logoutFn }
}

async function logoutApi(logoutData: LogoutRequest): Promise<LogoutResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/logout`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(logoutData),
    })

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const message = Array.isArray(error.message) ? error.message.join(" ") : error.message;
      throw new Error(message ?? "Could not logout the account")
    }

    const data: LogoutResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}