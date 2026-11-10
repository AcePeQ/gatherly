import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import { throwApiError } from "../../../lib/api/throwApiError";

export function useTripSearch(query: string) {
  const { isLoading, data } = useQuery({
    queryKey: ["trips", query],
    queryFn: ({ signal }) => tripSearchApi(query, signal),
    enabled: Boolean(query)
  });

  return { isLoading, data };
}

async function tripSearchApi(query: string, signal: AbortSignal): Promise<> {
  const response = await fetch(`${API_URL}/trips?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include",
    signal
  });

  if (!response.ok) {
    await throwApiError(response, "Could not find trips.");
  }

  const data = await response.json();

  return data;
}
