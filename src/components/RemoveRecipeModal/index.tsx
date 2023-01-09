import { StyledRemoveModal, StyledRemoveRecipeModalBackground } from "./styles";
import { MdDeleteSweep } from "react-icons/md";
import { BsCheck2All } from "react-icons/bs";

export const RemoveRecipeModal = () => {
  return (
    <StyledRemoveRecipeModalBackground>
      <StyledRemoveModal>
        <header>
          <h3>Excluir</h3>
          <button>X</button>
        </header>
        <div>
          <h2>Tem certeza que deseja excluir sua receita?</h2>
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
    </StyledRemoveRecipeModalBackground>
  );
};
