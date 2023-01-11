import { Footer } from "../../components/Footer";
import { Header }  from "../../components/Header";
import { RecipePageStyles, MainRecipeStyles, ContainerRecipe } from "./styles";
import imgRecipe from "../../assets/lasanha.png"
import deleteIcon from "../../assets/delete_icon.svg"
import editIcon from "../../assets/edit_icon.svg"
import starIcon from "../../assets/star_icon.svg"
import timeIcon from "../../assets/time.svg"
import foodIcon from "../../assets/garfo.png"
import profileImg from "../../assets/img_perfil_default.png"
import { useContext } from "react";
import { RecipesContext } from "../../contexts/RecipesContext";

export const RecipePage = () => {

  const { viewRecipe, userInfo } = useContext(RecipesContext);

  return (
    <RecipePageStyles>
      <Header />
      <MainRecipeStyles>
        <ContainerRecipe>
            <div>
                <img src={viewRecipe.recipeImg} className="imgRecipe" alt="" />
                <div>
                  <h1>{viewRecipe.recipeName}</h1>
                  <span>
                    <span>
                      <img src={starIcon} alt="" />
                      <p>{viewRecipe.rating}</p>
                    </span>
                    <span>{viewRecipe.category}</span>
                  </span>
                </div>
                {viewRecipe.userId === userInfo?.id && (
                  <div>
                    <button>
                      <img src={editIcon} alt="" />
                    </button>
                    <button>
                      <img src={deleteIcon} alt="" />
                    </button>
                  </div>
                )}
            </div>
            <div className="recipeInfo">
              <div>
                <span>Ingredientes</span>
                <ul>
                  {viewRecipe.ingredients.map((ingredient) => (
                    <li key={viewRecipe.ingredients.findIndex((element) => element.ingredientName === ingredient.ingredientName)}>{`${ingredient.qty} ${ingredient.unity} de ${ingredient.ingredientName}`}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>Modo de preparo</span>
                <span>
                  {viewRecipe.description}
                </span>
              </div>
              <div className="lastDiv">
                <span>
                  <p><img src={timeIcon} alt="" /> Tempo de preparo: {viewRecipe.prepTime}</p>
                  <p><img src={foodIcon} alt="" /> Rende {viewRecipe.portions} porção</p>
                </span>
                <div className="cooker">
                  <span>
                    Receita criada por:
                  </span>
                  <span>
                    {userInfo?.username}
                  </span>
                  <img src={userInfo?.imgUrl} alt={userInfo?.username} />
                </div>
              </div>
            </div>
        </ContainerRecipe>
      </MainRecipeStyles>
      <Footer />
    </RecipePageStyles>
  );
};
