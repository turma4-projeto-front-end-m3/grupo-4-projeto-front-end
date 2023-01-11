import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iLoginData,
  iRegisterData,
  iUser,
  iUserProvider,
  iUserProviderProps,
} from "./types";

export const UserContext = createContext({} as iUserProvider);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navegate = useNavigate();

  const registerUser = async (data: iRegisterData): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post("register", data);
      toast.success("Conta criada com sucesso!");
      navegate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Cadastro não efetuado, tente novamente");
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (data: iLoginData): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post("login", data);

      localStorage.clear();
      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@UserId", JSON.stringify(response.data.user.id));
      setUser(response.data);

      toast.success("Login realizado com sucesso!");
      navegate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Login não efetuado, tente novamente");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
        const token = localStorage.getItem("@token");
        const userId = localStorage.getItem("@UserId");
        if(!token) {
            setLoading(false)
            return;
        } 
        try {
            const { data } = await api.get(`/users/${userId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setUser(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    loadUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loginUser, registerUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
