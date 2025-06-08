export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    role: string;
  };
};

export interface AuthStateType {
  accessToken: string | null;
  refreshToken: string | null;
}