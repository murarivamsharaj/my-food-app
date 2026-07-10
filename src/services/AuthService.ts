import { loginUser, registerUser } from "../apis/AuthApis";
import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";

export const serviceRegister = async (data: RegisterRequest) => {
  const response = await registerUser(data);

  return response.data;
};

export const serviceLogin = async (data: LoginRequest) => {
  const response = await loginUser(data);

  return response.data;
} 