import { Header } from "../../components/Header";
import Welcome from "../../assets/BemVindo.svg";
import {
  Button,
  HomeContainer,
  HomeFilterContainer,
  HomePublish,
} from "./styles";
import { FilterBtn } from "../../styles/FilterButton";
import { InputSearchContainer } from "../ProfilePage/styles";
import { Footer } from "../../components/Footer";
import { RecipesList } from "../../components/RecipesList";
import { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../contexts/RecipesContext";
export const HomePage = () => {
  const { recipeList, getAllRecipes, categories} = useContext(RecipesContext);
  const [filter, setFilter] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const filteredProducts = recipeList && recipeList.filter(
    (recipe) => (
        filter === "" ?
        true :
        recipe.recipeName.toLowerCase().includes(filter.toLowerCase()) || recipe.category.toLowerCase().includes(filter.toLowerCase())
    )
)

  useEffect(() => {
    console.log(recipeList);
    getAllRecipes();
  }, []);
  return (
    <>
      <Header />
      <HomeContainer>
        <div>
          <img src={Welcome} alt="Bem Vindo!" />
          <HomePublish>
            <h1>Deseja Publicar Uma Receita?</h1>
            <Button>+</Button>
          </HomePublish>
          <HomeFilterContainer>
            <FilterBtn>Todos</FilterBtn>
            <FilterBtn onClick={() => {
              
            }}>Massas</FilterBtn>
            <FilterBtn>Lanches</FilterBtn>
            <FilterBtn>Carnes</FilterBtn>
            <FilterBtn>Sobremesas</FilterBtn>
          </HomeFilterContainer>
          <InputSearchContainer></InputSearchContainer>
        </div>
        <RecipesList array={filteredProducts} onProfilePage={false} />
      </HomeContainer>
      <Footer />
    </>
  );
};
