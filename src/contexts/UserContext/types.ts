import { Dispatch, SetStateAction } from "react";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserProvider {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  loginUser: (data: iLoginData) => Promise<void>;
  registerUser: (data: iRegisterData) => Promise<void>;
  loading: boolean;
}

export interface iUser {
  id: string;
  username: string;
  email: string;
  imgUrl: string;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iRegisterData {
  username: string;
  imgUrl: string;
  email: string;
  password: string;
  retypePassword: string;
}
