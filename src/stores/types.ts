export type TUser = {
  email: string;
};

export type TAuthState = {
  user: TUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};
