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

export type LogoutResponse = {
  message: string;
}

export type LogoutRequest = {
  id: number;
  email: string;
  name: string;
}