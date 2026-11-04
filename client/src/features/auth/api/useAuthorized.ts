import { useQuery } from "@tanstack/react-query";

import { API_URL } from "../../../config/apiConfig";
import { throwApiError } from "../../../lib/api/throwApiError";
import type { AuthSessionResponse, User } from "../../../types/auth";
import { AUTH_SESSION_QUERY_KEY } from "../constants/authQueryKeys";

export function useAuthorized() {
  const { isPending, data, isError, error } = useQuery({
    queryKey: AUTH_SESSION_QUERY_KEY,
    queryFn: getAuthorizeApi,
  });

  return { isPending, data, isError, error };
}

async function getAuthorizeApi(): Promise<AuthSessionResponse> {
  const response = await fetch(`${API_URL}/auth/profile`, {
    method: "GET",
    credentials: "include",
  });

  if (response.status === 401) {
    return {
      user: null,
      isAuthorized: false,
    };
  }

  if (!response.ok) {
    await throwApiError(response, "Could not verify your session.");
  }

  const data: User = await response.json();

  return {
    user: data,
    isAuthorized: true,
  };
}
