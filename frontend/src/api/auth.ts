import api from "./api";
import type {
  LoginRequest,
  SignupRequest,
  AuthResponse,
  User,
} from "../types/auth";

export const signup = async (
  data: SignupRequest
): Promise<AuthResponse> => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const getCurrentUser = async (): Promise<User> => {
  const res = await api.get("/auth/me");
  return res.data;
};