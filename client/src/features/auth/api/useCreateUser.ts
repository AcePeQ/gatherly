import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../../config/apiConfig";
import type { ApiErrorResponse } from "../../../types/api";
import type { RegisterFormValues } from "../schemas/registerSchema";
import type { RegisterResponse } from "../../../types/auth";



export function useCreateUser() {
  const { isPending, isError, error, mutate: createUser } = useMutation({
    mutationFn: createUserApi,
  })

  return { isPending, isError, error, createUser }
}

async function createUserApi(registerData: RegisterFormValues): Promise<RegisterResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(registerData),
    })

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const message = Array.isArray(error.message) ? error.message.join(" ") : error.message;
      throw new Error(message ?? "Could not create your account")
    }

    const data: RegisterResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error)
    throw error
  }
}