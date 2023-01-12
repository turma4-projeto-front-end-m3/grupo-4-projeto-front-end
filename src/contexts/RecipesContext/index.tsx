import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [viewRecipe, setViewRecipe] = useState<iRecipesList>({
    recipeName: "",
    category: "",
    ingredients: [
      {
        ingredientName: "",
        qty: 0,
        unity: "",
      }
    ],
    prepTime: "",
    portions: "",
    description: "",
    recipeImg: "",
    rating: "",
    userId: 0,
    id: 0,
  });

  const categories = [
    "Todos",
    "Carnes",
    "Aves",
    "Peixes",
    "Frutos do Mar",
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

  const deleteRecipe = async (id: Number | null) => {
    await api.delete(`/recipes/${id}`);
    toast("Receita removida com sucesso!");
  };


  return (
    <RecipesContext.Provider
      value={{
        recipeList,
        userInfo,
        userRecipesList,
        categories,
        viewRecipe,
        setViewRecipe,
        getAllRecipes,
        getUserProfile,
        postCreateRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
