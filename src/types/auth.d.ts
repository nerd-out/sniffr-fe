interface AuthState {
  email: string;
  password: string;
}

interface AuthResponse {
  token?: string;
}