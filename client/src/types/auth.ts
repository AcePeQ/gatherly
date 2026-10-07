export type RegisterResponse = {
  message: string
}

export type User = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt?: string;
}

export type LoginResponse = {
  user: User,
  message: string
}

export type AuthSessionResponse = {
  user: User | null;
  isAuthorized: boolean;
}

export type AuthRedirectState = {
  from?: {
    pathname: string;
    search?: string;
    hash?: string;
  };
}

export type LogoutResponse = {
  message: string;
}

export type ForgotPasswordResponse = {
  message: string;
}

export type ResetPasswordResponse = {
  message: string;
}
