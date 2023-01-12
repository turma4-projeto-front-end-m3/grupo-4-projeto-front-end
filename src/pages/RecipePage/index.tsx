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
import { useContext, useEffect, useState } from "react";
import { RecipesContext } from "../../contexts/RecipesContext";
import { api } from "../../services/api";
import { RecipeModal } from "../../components/RecipeModal";
import { RemoveRecipeModal } from "../../components/RemoveRecipeModal";

export interface iUser {
  email: string;
  password: string;
  username: string;
  imgUrl: string;
  id: number;
}

export const RecipePage = () => {

  const { viewRecipe, setViewRecipe, userInfo, getUserProfile, setModalInfo } = useContext(RecipesContext);

  const [userFound, setUserFound] = useState({
    username: "",
    imgUrl: "",
  });
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<Number | null>(null);

  useEffect(() => {
    getUserProfile();

    const recipe = JSON.parse(localStorage.getItem("@viewRecipe") as string);
    
    setViewRecipe(recipe);
    
    const verifyUser = async () => {
      const getAllUsers = async () => {
        try {
          const tokenUser = localStorage.getItem("@token");
          api.defaults.headers.common.authorization = `Bearer ${tokenUser}`;
    
          const response = await api.get("users");
    
          return response.data;
        } catch (error) {
          console.log(error);
        }
    
      }
  
      if (viewRecipe.userId !== userInfo?.id) {
        const allUsers = await getAllUsers();
  
        const user = allUsers && allUsers.filter((user: iUser) => user.id === viewRecipe.userId);

        setUserFound({...userFound, username: user[0].username, imgUrl: user[0].imgUrl});
      }
      else {
        setUserFound({...userFound, username: userInfo.username, imgUrl: userInfo.imgUrl});
      }

      localStorage.setItem("@userFound", JSON.stringify(userFound));
    }
    verifyUser();

  }, [])
  
  return (
    <RecipePageStyles>
      {editModal && (
        <RecipeModal modalTitle="Editar receita" setEditModal={setEditModal} modalSubmit={false}/>
      )}

      {deleteModal && (
        <RemoveRecipeModal
          setDeleteModal={setDeleteModal}
          recipeId={recipeId}
        />
      )}

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
                    <button className="editBtn" onClick={() => {
                      setEditModal(true);
                      setModalInfo(viewRecipe);
                    }}>
                      <img src={editIcon} alt="" />
                    </button>
                    <button className="deleteBtn" onClick={() => {
                      setDeleteModal(true);
                      setRecipeId(viewRecipe.id);
                    }}>
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
                    {userFound.username}
                  </span>
                  <img src={userFound.imgUrl} />
                </div>
              </div>
            </div>
        </ContainerRecipe>
      </MainRecipeStyles>
      <Footer />
    </RecipePageStyles>
  );
};
