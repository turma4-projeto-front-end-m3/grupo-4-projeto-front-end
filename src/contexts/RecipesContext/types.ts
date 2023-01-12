export interface iChildrenProps {
  children: React.ReactNode;
}

export interface iRecipesList {
  recipeName: string;
  category: string;
  ingredients: [
    {
      ingredientName: string;
      qty: number;
      unity: string;
    }
  ];
  prepTime: string;
  portions: string;
  description: string;
  recipeImg: string;
  rating: string;
  userId: number;
  id: number;
}

export interface iUserInfo {
  email: string;
  password: string;
  username: string;
  imgUrl: string;
  id: number;
  recipes: iRecipesList[] | null;
}

interface iIngredients {
  ingredientName: string;
  qty: string;
  unity: string;
}

export interface iCreateRecipeData {
  recipeName: string;
  category: string;
  ingredients?: iIngredients[];
  prepTime: string;
  portions: string;
  description: string;
  recipeImg: string;
  rating: string;
  userId: number;
}

export interface iRecipesContext {
  recipeList: iRecipesList[] | null;
  userInfo: iUserInfo | null;
  userRecipesList: iRecipesList[] | null;
  categories: string[];
  viewRecipe: iRecipesList;
  setViewRecipe: React.Dispatch<React.SetStateAction<iRecipesList>>;
  getAllRecipes: () => void;
  getUserProfile: () => void;
  postCreateRecipe: (data: iCreateRecipeData) => void;
  deleteRecipe: (id: Number | null) => void;
  setModalInfo: React.Dispatch<React.SetStateAction<iRecipesList | null>>;
  modalInfo: iRecipesList | null;
  patchChangeRecipe: (recipeId: Number, data: iRecipesList | null) => void;
}
