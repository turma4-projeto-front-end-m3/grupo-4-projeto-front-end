import { List, RecipeBtn, RecipeItem, RecipeItemContent } from "./styles";

import StarIcon from "../../assets/star_icon.svg";
import ViewIcon from "../../assets/view_icon.svg";
import DeleteIcon from "../../assets/delete_icon.svg";
import { iRecipesList } from "../../contexts/RecipesContext/types";

interface iRecipeListProps {
  array: iRecipesList[] | null;
  onProfilePage: boolean;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeId?: React.Dispatch<React.SetStateAction<Number | null>>;
}

export const RecipesList = ({
  array,
  onProfilePage,
  setDeleteModal,
  setRecipeId,
}: iRecipeListProps) => {
  return (
    <List>
      {array?.map((recipe) => (
        <RecipeItem key={recipe.id}>
          <img src={recipe.recipeImg} />

          <RecipeItemContent>
            <div>
              <h3>{recipe.recipeName}</h3>

              <div className="avaliation_container">
                <img src={StarIcon} className="star_icon" />
                <span>{Number(recipe.rating).toFixed(1)}</span>
              </div>
            </div>

            <span>Tempo de preparo: {recipe.prepTime}</span>

            <div>
              <RecipeBtn btnColor="green">
                <img src={ViewIcon} alt="Botão de ver receita" />
              </RecipeBtn>

              {onProfilePage && (
                <RecipeBtn
                  btnColor="pink"
                  onClick={() => {
                    setDeleteModal && setDeleteModal(true);
                    setRecipeId && setRecipeId(recipe.id);
                  }}
                >
                  <img src={DeleteIcon} alt="Botão de deletar receita" />
                </RecipeBtn>
              )}
            </div>
          </RecipeItemContent>
        </RecipeItem>
      ))}
    </List>
  );
};
