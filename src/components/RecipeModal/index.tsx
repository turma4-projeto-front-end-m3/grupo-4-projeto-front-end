import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { modalFormSchema } from "./modalFormSchema";
import {
  StyledCancelButton,
  StyledGreenButton,
  StyledRecipeModal,
  StyledRecipeModalBackground,
} from "./styles";

import { BsFillTrashFill } from "react-icons/bs";
import { RecipesContext } from "../../contexts/RecipesContext";
import { iRecipesList } from "../../contexts/RecipesContext/types";

interface iRecipeModalProps {
  modalTitle: string;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalSubmit: boolean;
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
  ingredientName: string;
  qty: string;
  unity: string;
}

export const RecipeModal = ({
  modalTitle,
  setEditModal,
  modalSubmit,
}: iRecipeModalProps) => {

  const { postCreateRecipe, getUserProfile, patchChangeRecipe, categories, modalInfo, setModalInfo, setViewRecipe } = useContext(RecipesContext);

  const [ingredientsList, setIngredientsList] = useState([] as iIngredients[]);
  const [ingredient, setIngredient] = useState<iIngredients>({
    ingredientName: "",
    qty: "",
    unity: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iModalFormData>({
    resolver: yupResolver(modalFormSchema),
  });

  const submit: SubmitHandler<iModalFormData> = (data: iModalFormData) => {
    const id = Number(localStorage.getItem("@UserId"));

    if (modalSubmit){
      const newData = { ...data, ingredients: ingredientsList, userId: id };

      postCreateRecipe(newData);

      getUserProfile();
    }
    else {
      const newModalInfo: iRecipesList = {...data, ingredients: ingredientsList, userId: id};
      console.log(newModalInfo)
      patchChangeRecipe(Number(modalInfo?.id), newModalInfo);
      setViewRecipe(newModalInfo);
    }
    setModalInfo(null);
    setEditModal(false);
  };

  const addIngredients = () => {
    {
      const newIngredientsList = [...ingredientsList, ingredient];
      setIngredientsList(newIngredientsList);
      setIngredient({
        ingredientName: "",
        qty: "",
        unity: "",
      });
    }
  };

  useEffect(() => {
    if(modalInfo !== null) {
      setIngredientsList(modalInfo.ingredients)
    }
  }, [])

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
            <input
              id="title"
              placeholder="Digite o título..."
              {...register("recipeName")}
              defaultValue={modalInfo ? modalInfo.recipeName : undefined}
            />

            <label htmlFor="image">Imagem</label>
            <input
              id="image"
              placeholder="Digite o link da imagem..."
              {...register("recipeImg")}
              defaultValue={modalInfo ? modalInfo.recipeImg : undefined}
            />

            <label htmlFor="portions">Rendimento</label>
            <input
              id="portions"
              placeholder="Digite o rendimento..."
              type="number"
              {...register("portions")}
              min={1}
              defaultValue={modalInfo ? modalInfo.portions : undefined}
            />

            <label htmlFor="prepTime">Tempo de preparo</label>
            <input
              id="prepTime"
              placeholder="Digite o tempo de preparo..."
              {...register("prepTime")}
              defaultValue={modalInfo ? modalInfo.prepTime : undefined}
            />

            <label htmlFor="rating">Avaliação da receita</label>
            <input
              id="rating"
              placeholder="Digita a avaliação..."
              type="number"
              min="1"
              max="5"
              {...register("rating")}
              defaultValue={modalInfo ? modalInfo.rating : undefined}
            />

            <label htmlFor="category">Categoria</label>
            <select id="category" {...register("category")} defaultValue={modalInfo ? modalInfo.category : ""}>
              <option value="" hidden>Selecione a categoria</option>
              {categories.map((category) => {
                if(category !== "Todos") {
                  return <option key={category} value={category}>{category}</option>
                }
              })}
            </select>
          </div>
          <div>
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="miniCont">
              <input
                id="ingredients"
                placeholder="Ingrediente..."
                className="smallInput"
                onChange={(event) =>
                  setIngredient({
                    ...ingredient,
                    ingredientName: event.target.value,
                  })
                }
                value={ingredient.ingredientName}
              />
              <input
                id="ingredients"
                placeholder="qtd..."
                className="miniInput"
                onChange={(event) =>
                  setIngredient({ ...ingredient, qty: event.target.value })
                }
                value={ingredient.qty}
                type={"number"}
                min={1}
              />
              <select
                id="ingredients"
                onChange={(event) =>
                  setIngredient({ ...ingredient, unity: event.target.value })
                }
                value={ingredient.unity}
              >
                <option value="" hidden>
                  Unidade
                </option>
                <option>mg</option>
                <option>g</option>
                <option>Kg</option>
                <option>un</option>
                <option>ml</option>
                <option>L</option>
                <option>xícara(s)</option>
                <option>colher(es) de sopa</option>
              </select>

              <button onClick={addIngredients} type="button">
                +
              </button>
            </div>
            <section>
              <ul>
                {ingredientsList &&
                  ingredientsList.map((ingredient) => (
                    <li
                      key={ingredientsList.findIndex(
                        (element) =>
                          element.ingredientName === ingredient.ingredientName
                      )}
                    >
                      <h4>{ingredient.ingredientName}</h4>
                      <span>{ingredient.qty}</span>
                      <span>{ingredient.unity}</span>

                      <BsFillTrashFill
                        onClick={() =>
                          setIngredientsList(
                            ingredientsList.filter(
                              (element) =>
                                element.ingredientName !==
                                ingredient.ingredientName
                            )
                          )
                        }
                      />
                    </li>
                  ))}
              </ul>
            </section>

            <label>Modo de Preparo</label>
            <textarea {...register("description")} defaultValue={modalInfo ? modalInfo.description : undefined}></textarea>
            <div className="buttonMiniCont">
              <StyledCancelButton
                type="button"
                onClick={() => setEditModal(false)}
              >
                Cancelar
              </StyledCancelButton>
              <StyledGreenButton type="submit">Salvar</StyledGreenButton>
            </div>
          </div>
        </form>
      </StyledRecipeModal>
    </StyledRecipeModalBackground>
  );
};
