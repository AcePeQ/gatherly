import { useMutation } from "@tanstack/react-query";

import { API_URL } from "../../../config/apiConfig";
import type { LogoutResponse } from "../../../types/auth";
import { throwApiError } from "../../../lib/api/throwApiError";

export function useLogout() {
  const { isPending, isError, error, mutate: logoutFn } = useMutation({
    mutationFn: logoutApi,
  });

  return { isPending, isError, error, logoutFn };
}

async function logoutApi(): Promise<LogoutResponse> {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    await throwApiError(response, "Could not log out.");
  }

  const data: LogoutResponse = await response.json();

  return data;
}
