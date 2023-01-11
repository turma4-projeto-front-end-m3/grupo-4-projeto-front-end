import SearchIcon from "../../assets/search_icon.svg";
import AddIcon from "../../assets/add_icon.svg";

import { FilterBtn } from "../../styles/FilterButton";
import { FilterContainer, InputSearchContainer, MainContainer } from "./styles";
import { Header } from "../../components/Header";
import { RecipesList } from "../../components/RecipesList";
import { Footer } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../contexts/RecipesContext";
import { RecipeModal } from "../../components/RecipeModal";
import { RemoveRecipeModal } from "../../components/RemoveRecipeModal";

export const ProfilePage = () => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const { userRecipesList, getUserProfile } = useContext(RecipesContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {editModal && (
        <RecipeModal modalTitle="Criar Receita" setEditModal={setEditModal} />
      )}
      {deleteModal && <RemoveRecipeModal setDeleteModal={setDeleteModal} />}
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

          <button onClick={() => setEditModal(true)}>
            <img src={AddIcon} alt="Icone de adicionar" />
          </button>
        </div>

        <RecipesList
          array={userRecipesList}
          onProfilePage={true}
          setDeleteModal={setDeleteModal}
        />
      </MainContainer>

      <Footer />
    </>
  );
};
