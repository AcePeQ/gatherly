export type ProfileUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthenticatedRequest = Request & {
  user: ProfileUser;
};