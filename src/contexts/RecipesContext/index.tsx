import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  iChildrenProps,
  iCreateRecipeData,
  iRecipesContext,
  iRecipesList,
  iUserInfo,
} from "./types";

export const RecipesContext = createContext({} as iRecipesContext);

export const RecipesProvider = ({ children }: iChildrenProps) => {
  const [recipeList, setRecipeList] = useState<iRecipesList[] | null>([]);
  const [userInfo, setUserInfo] = useState<iUserInfo | null>(null);
  const [userRecipesList, setUserRecipesList] = useState<iRecipesList[] | null>(
    []
  );

  const categories = [
    "Todos",
    "Carnes",
    "Aves",
    "Peixes e Frutos do Mar",
    "Saladas",
    "Molhos",
    "Sopas",
    "Massas",
    "Bebidas",
    "Doces e Sobremesas",
    "Conservas",
    "Panificação",
    "Vegano",
  ];

  const getAllRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      setRecipeList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async () => {
    const getUserId = localStorage.getItem("@UserId");
    const tokenUser = localStorage.getItem("@token");

    try {
      api.defaults.headers.common.authorization = `Bearer ${tokenUser}`;
      const response = await api.get(`/users/${getUserId}?_embed=recipes`);
      setUserInfo(response.data);
      setUserRecipesList(response.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const postCreateRecipe = async (data: iCreateRecipeData) => {
    try {
      const response = await api.post("/recipes", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RecipesContext.Provider
      value={{
        recipeList,
        userInfo,
        userRecipesList,
        getAllRecipes,
        getUserProfile,
        postCreateRecipe,
        categories
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
