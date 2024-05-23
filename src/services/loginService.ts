// services/loginService.ts

import axios from "axios";
import { LoginResponse } from "../interfaces/userInterface";
import { env } from "../constants";

export interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(env.apiUrl + "/login", credentials);
    // localStorage.setItem('account', response.data);
   // console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(
      "Login failed. Please check your credentials and try again."
    );
  }
};
