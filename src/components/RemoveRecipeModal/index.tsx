import { StyledRecipeModalBackground } from "../RecipeModal/styles";
import { StyledRemoveModal } from "./styles";
import { MdDeleteSweep } from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";

export const RemoveRecipeModal = () => {
  return (
    <StyledRecipeModalBackground>
      <StyledRemoveModal>
        <header>
          <button>X</button>
        </header>
        <div>
          <h2>Tem certeza que deseja remover sua receita?</h2>
          <div className="removeMiniContButtons">
            <button className="confirm">
              <BsCheck2All size={30} />
            </button>
            <button className="deny">
              <MdDeleteSweep size={30} />
            </button>
          </div>
        </div>
      </StyledRemoveModal>
    </StyledRecipeModalBackground>
  );
};
