import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  iChildrenProps,
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
      console.log(response.data.recipes);
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
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
