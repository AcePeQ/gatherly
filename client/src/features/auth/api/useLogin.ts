import { useMutation, useQueryClient } from "@tanstack/react-query";

import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { AuthSessionResponse, LoginResponse } from "../../../types/auth";
import { AUTH_SESSION_QUERY_KEY } from "../constants/authQueryKeys";
import type { LoginFormValues } from "../schemas/loginSchema";

export function useLogin() {
  const queryClient = useQueryClient();

  const { isPending, isError, error, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      queryClient.setQueryData<AuthSessionResponse>(AUTH_SESSION_QUERY_KEY, {
        user: response.user,
        isAuthorized: true,
      });
    },
  });

  return { isPending, isError, error, login };
}

async function loginApi(loginData: LoginFormValues): Promise<LoginResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const message = Array.isArray(error.message) ? error.message.join(" ") : error.message;
      throw new Error(message ?? "Could not login into the account");
    }

    const data: LoginResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
