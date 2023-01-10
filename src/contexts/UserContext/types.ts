export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserProvider {
  user: iUser | null;
  loginUser: (data: iLoginData) => Promise<void>;
  registerUser: (data: iRegisterData) => Promise<void>;
}

export interface iUser {
  id: string;
  username: string;
  email: string;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface iRegisterData {
  username: string;
  img: string;
  email: string;
  password: string;
  retypePassword: string;
}
