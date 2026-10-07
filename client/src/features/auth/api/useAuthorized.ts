import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { User } from "../../../types/auth";

type AuthorizeResponse = {
  user: User | null,
  isAuthorized: boolean;
}


export function useAuthorized() {
  const { isPending, data, isError } = useQuery({
    queryKey: ['authorize'],
    queryFn: getAuthorizeApi,
  });

  return { isPending, data, isError }
}

async function getAuthorizeApi(): Promise<AuthorizeResponse> {
  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: {
      "Content-Type": "application/json"
    },
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