import { Header } from "../../components/Header";
import SearchIcon from "../../assets/search_icon.svg";
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
import { FilterList } from "../../components/FilterList";
export const HomePage = () => {
  const {recipeList, getAllRecipes, categories} = useContext(RecipesContext);
  const [filter, setFilter] = useState("");
  const [filterText, setFilterText] = useState("")
  const [openModal, setOpenModal] = useState(false);

  const filteredProducts = recipeList && recipeList.filter(
    (recipe) => (
        filter === "" ?
        true :
        recipe.recipeName.toLowerCase().includes(filter.toLowerCase()) || recipe.category.toLowerCase().includes(filter.toLowerCase())
    )
  )

  useEffect(() => {
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
            <InputSearchContainer>
              <input onChange={(e) => {setFilter(e.target.value)}} type="text" placeholder="Pesquisar por..." />
              <img src={SearchIcon} alt="Icone de pesquisa" />
            </InputSearchContainer>
          </HomePublish>
          <HomeFilterContainer>
            <FilterList categories={categories} setFilter={setFilter} />
          </HomeFilterContainer>
        </div>
        <RecipesList array={filteredProducts} onProfilePage={false} />
      </HomeContainer>
      <Footer />
    </>
  );
};
