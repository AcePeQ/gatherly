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

export type LoginReponse = {
  user: User,
  message: string
}