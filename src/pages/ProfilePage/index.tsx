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
import { FilterList } from "../../components/FilterList";

export const ProfilePage = () => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<Number | null>(null);
  const [filter, setFilter] = useState("")

  const { userRecipesList, getUserProfile, categories } = useContext(RecipesContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  const filteredProducts = userRecipesList && userRecipesList.filter(
    (recipe) => (
        filter === "" ?
        true :
        recipe.recipeName.toLowerCase().includes(filter.toLowerCase()) || recipe.category.toLowerCase().includes(filter.toLowerCase())
    )
  )

  return (
    <>
      {editModal && (
        <RecipeModal modalTitle="Criar Receita" setEditModal={setEditModal} />
      )}
      {deleteModal && (
        <RemoveRecipeModal
          setDeleteModal={setDeleteModal}
          recipeId={recipeId}
        />
      )}
      <Header />

      <FilterContainer>
        <div>
          <FilterList categories={categories} setFilter={setFilter}/>
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
          array={filteredProducts}
          onProfilePage={true}
          setDeleteModal={setDeleteModal}
          setRecipeId={setRecipeId}
        />
      </MainContainer>

      <Footer />
    </>
  );
};
