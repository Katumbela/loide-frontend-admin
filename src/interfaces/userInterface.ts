export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface LoginResponse {
    status: boolean;
    message: string;
    token: string;
    user: User;
  }