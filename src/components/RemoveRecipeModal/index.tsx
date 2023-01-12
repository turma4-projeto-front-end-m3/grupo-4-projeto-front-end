import { StyledRemoveModal, StyledRemoveRecipeModalBackground } from "./styles";
import { IoMdClose } from "react-icons/Io";
import { BsCheck2All } from "react-icons/bs";
import { useContext } from "react";
import { RecipesContext } from "../../contexts/RecipesContext";
import { useNavigate } from "react-router-dom";

interface iRemoveRecipeModalProps {
  recipeId: Number | null;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RemoveRecipeModal = ({
  setDeleteModal,
  recipeId,
}: iRemoveRecipeModalProps) => {
  const { deleteRecipe, getUserProfile } = useContext(RecipesContext);

  const navigate = useNavigate()

  return (
    <StyledRemoveRecipeModalBackground>
      <StyledRemoveModal>
        <header>
          <h3>Excluir</h3>
          <button onClick={() => setDeleteModal(false)}>X</button>
        </header>
        <div>
          <h2>Tem certeza que deseja excluir sua receita?</h2>
          <div className="removeMiniContButtons">
            <button
              className="confirm"
              onClick={() => {
                deleteRecipe(recipeId);
                getUserProfile();
                setDeleteModal(false);
                navigate("/profile");
              }}
            >
              <BsCheck2All size={30} />
            </button>
            <button className="deny" onClick={() => setDeleteModal(false)}>
              <IoMdClose size={30} />
            </button>
          </div>
        </div>
      </StyledRemoveModal>
    </StyledRemoveRecipeModalBackground>
  );
};
