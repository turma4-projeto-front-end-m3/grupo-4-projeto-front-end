import SearchIcon from "../../assets/search_icon.svg";
import AddIcon from "../../assets/add_icon.svg";

import { FilterBtn } from "../../styles/FilterButton";
import { FilterContainer, InputSearchContainer, MainContainer } from "./styles";
import { Header } from "../../components/Header";
import { RecipesList } from "../../components/RecipesList";
import { Footer } from "../../components/Footer";


export const ProfilePage = () => {
  return (
    <>
      <Header />

      <FilterContainer>
        <div>
          <FilterBtn>Todos</FilterBtn>
          <FilterBtn>Massas</FilterBtn>
          <FilterBtn>Carnes</FilterBtn>
          <FilterBtn>Doces</FilterBtn>
        </div>

        <InputSearchContainer>
          <input type="text" placeholder="Pesquisar por..." />

          <img src={SearchIcon} alt="Icone de pesquisa" />
        </InputSearchContainer>
      </FilterContainer>

      <MainContainer>
        <div>
          <h2>Minhas Receitas</h2>

          <button>
            <img src={AddIcon} alt="Icone de adicionar"/>
          </button>
        </div>

        <RecipesList />
      </MainContainer>

      <Footer />
    </>
  );
};
