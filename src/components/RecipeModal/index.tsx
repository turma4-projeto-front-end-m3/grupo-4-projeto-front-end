import {
  StyledCancelButton,
  StyledGreenButton,
  StyledRecipeModal,
  StyledRecipeModalBackground,
} from "./styles";

interface iRecipeModalProps {
  modalTitle: string;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RecipeModal = ({
  modalTitle,
  setEditModal,
}: iRecipeModalProps) => {
  return (
    <StyledRecipeModalBackground>
      <StyledRecipeModal>
        <header>
          <h3>{modalTitle}</h3>
          <button onClick={() => setEditModal(false)}>X</button>
        </header>
        <form>
          <div>
            <label htmlFor="title">Título</label>
            <input id="title" placeholder="Digite o título..." />
            <label htmlFor="image">Imagem</label>
            <input id="image" placeholder="Digite o link da imagem..." />
            <label htmlFor="portions">Rendimento</label>
            <input id="portions" placeholder="Digite o rendimento..." />
            <label htmlFor="prepTime">Tempo de preparo</label>
            <input id="prepTime" placeholder="Digite o tempo de preparo..." />
            <label htmlFor="">Avaliação da receita</label>
            <input id="" placeholder="Digita a avaliação..." />
            <label htmlFor="category">Categoria</label>
            <select>
              <option>Massas</option>
              <option>Carnes</option>
              <option>Saladas</option>
              <option>Sobremesas</option>
            </select>
          </div>
          <div>
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="miniCont">
              <input
                id="ingredients"
                placeholder="Ingrediente..."
                className="smallInput"
              />
              <input
                id="ingredients"
                placeholder="qtd..."
                className="miniInput"
              />
              <select id="ingredients">
                <option>g</option>
                <option>Kg</option>
                <option>Mg</option>
                <option>Un</option>
                <option>Ml</option>
              </select>
            </div>
            <section></section>
            <label>Modo de Preparo</label>
            <textarea></textarea>
            <div className="buttonMiniCont">
              <StyledCancelButton>Cancelar</StyledCancelButton>
              <StyledGreenButton>Salvar</StyledGreenButton>
            </div>
          </div>
        </form>
      </StyledRecipeModal>
    </StyledRecipeModalBackground>
  );
};
