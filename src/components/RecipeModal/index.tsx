import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { modalFormSchema } from "./ModalFormSchema";
import {
  StyledCancelButton,
  StyledGreenButton,
  StyledRecipeModal,
  StyledRecipeModalBackground,
} from "./styles";

import { BsFillTrashFill } from "react-icons/bs"
import { RecipesContext } from "../../contexts/RecipesContext";

interface iRecipeModalProps {
  modalTitle: string;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iModalFormData {
  recipeName: string;
  category: string;
  ingredients?: iIngredients[];
  prepTime: string;
  portions: string;
  description: string;
  recipeImg: string;
  rating: string;
  userId: number;
}

interface iIngredients {
  ingredientName: string,
  qty: string;
  unity: string;
}

export const RecipeModal = ({ modalTitle, setEditModal }: iRecipeModalProps) => {

  const { postCreateRecipe } = useContext(RecipesContext)

  const [ingredientsList, setIngredientsList] = useState<iIngredients[] | null>([]);
  const [ingredient, setIngredient] = useState<iIngredients>({
    ingredientName: "",
    qty: "",
    unity: ""
  })

  const { register, handleSubmit, formState: { errors } } = useForm<iModalFormData>({
    resolver: yupResolver(modalFormSchema)
  });

  const submit: SubmitHandler<iModalFormData> = (data: iModalFormData) => {
    const id = Number(localStorage.getItem("@UserId"));

    const newData = {...data, ingredients: ingredientsList, userId: id};
    console.log(newData);
    postCreateRecipe(newData);
  }

  return (
    <StyledRecipeModalBackground>
      <StyledRecipeModal>
        <header>
          <h3>{modalTitle}</h3>
          <button onClick={() => setEditModal(false)}>X</button>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="title">Título</label>
            <input id="title" placeholder="Digite o título..." {...register("recipeName")}/>

            <label htmlFor="image">Imagem</label>
            <input id="image" placeholder="Digite o link da imagem..." {...register("recipeImg")}/>

            <label htmlFor="portions">Rendimento</label>
            <input id="portions" placeholder="Digite o rendimento..." type="number" {...register("portions")}/>

            <label htmlFor="prepTime">Tempo de preparo</label>
            <input id="prepTime" placeholder="Digite o tempo de preparo..." {...register("prepTime")}/>

            <label htmlFor="rating">Avaliação da receita</label>
            <input id="rating" placeholder="Digita a avaliação..." type="number" min="1" max="5" {...register("rating")}/>

            <label htmlFor="category">Categoria</label>
            <select id="category" {...register("category")}>
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
                onChange={(event) => setIngredient({...ingredient, ingredientName: event.target.value})}
                value={ingredient.ingredientName}
              />
              <input
                id="ingredients"
                placeholder="qtd..."
                className="miniInput"
                onChange={(event) => setIngredient({...ingredient, qty: event.target.value})}
                value={ingredient.qty}
              />
              <select id="ingredients" onChange={(event) => setIngredient({...ingredient, unity: event.target.value})} value={ingredient.unity}>
                <option value="" hidden>Unidade</option>
                <option>mg</option>
                <option>g</option>
                <option>Kg</option>
                <option>un</option>
                <option>ml</option>
                <option>L</option>
                <option>xícara(s)</option>
                <option>colher(es) de sopa</option>
              </select>

              <button onClick={() => {
                setIngredientsList([...ingredientsList, {...ingredient}]); 
                setIngredient({
                  ingredientName: "",
                  qty: "",
                  unity: ""
                })
              }} type="button">+</button>
            </div>
            <section>
              <ul>
                {ingredientsList && ingredientsList.map(ingredient => (
                  <li key={ingredientsList.findIndex((element) => element.ingredientName === ingredient.ingredientName)}>
                    <h4>{ingredient.ingredientName}</h4>
                    <span>{ingredient.qty}</span>
                    <span>{ingredient.unity}</span>

                    <BsFillTrashFill onClick={() => setIngredientsList(ingredientsList.filter((element) => element.ingredientName !== ingredient.ingredientName))}/>
                  </li>
                ))}
              </ul>
            </section>

            <label>Modo de Preparo</label>
            <textarea {...register("description")}></textarea>
            <div className="buttonMiniCont">
              <StyledCancelButton type="button">Cancelar</StyledCancelButton>
              <StyledGreenButton type="submit">Salvar</StyledGreenButton>
            </div>
          </div>
        </form>
      </StyledRecipeModal>
    </StyledRecipeModalBackground>
  );
};
