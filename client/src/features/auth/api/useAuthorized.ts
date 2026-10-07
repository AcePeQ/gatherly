import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { AuthSessionResponse, User } from "../../../types/auth";
import { AUTH_SESSION_QUERY_KEY } from "../constants/authQueryKeys";


export function useAuthorized() {
  const { isPending, data, isError } = useQuery({
    queryKey: AUTH_SESSION_QUERY_KEY,
    queryFn: getAuthorizeApi,
  });

  return { isPending, data, isError }
}

async function getAuthorizeApi(): Promise<AuthSessionResponse> {
  const res = await fetch(`${API_URL}/auth/profile`, {
    method: "GET",
    credentials: "include"
  })

  if (res.status === 401) {
    return {
      user: null,
      isAuthorized: false,
    }
  }

  if (!res.ok) {
    throw new Error("Invalid session authorization.")
  }

  const data: User = await res.json();

  return {
    user: data,
    isAuthorized: true,
  };
}
