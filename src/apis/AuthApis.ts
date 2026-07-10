import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import axiosInstance from "./AxoisConfig";

export const registerUser = (data: RegisterRequest) => {
    return axiosInstance.post("/auth/register", data);
};

export const loginUser = async (data: LoginRequest) => {
    return await axiosInstance.post("/auth/login", data);
}; 