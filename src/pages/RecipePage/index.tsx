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

export const RecipePage = () => {
  return (
    <RecipePageStyles>
      <Header />
      <MainRecipeStyles>
        <ContainerRecipe>
            <div>
                <img src={imgRecipe} className="imgRecipe" alt="" />
                <div>
                  <h1>Lasanha à Bolonhesa</h1>
                  <span>
                    <span>
                      <img src={starIcon} alt="" />
                      <p>5.0</p>
                    </span>
                    <span>Massas</span>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={editIcon} alt="" />
                  </span>
                  <span>
                    <img src={deleteIcon} alt="" />
                  </span>
                </div>
            </div>
            <div className="recipeInfo">
              <div>
                <span>Ingredientes</span>
                <span>
                  <p>500 g de massa de lasanha</p> 
                  <p>500 g de carne moída</p> 
                  <p>2 caixas de creme de leite</p>
                  <p>3 colheres de manteiga</p>
                  <p>3 colheres de farinha de trigo</p>
                  <p>500 g de presunto</p>
                  <p>500 g de mussarela</p>
                  <p>sal a gosto</p>
                  <p>2 copos de leite</p>
                  <p>1 cebola ralada</p>
                  <p>3 colheres de óleo</p>
                  <p>1 caixa de molho de tomate</p>
                  <p>3 dentes de alho amassados</p>
                  <p>1 pacote de queijo ralado</p>
                </span>
              </div>
              <div>
                <span>Modo de preparo</span>
                <span>
                  <p> 1 - Cozinhe a massa segundo as orientações do fabricante.</p>
                  <p>2 - Refogue o alho, a cebola, a carne moída, o molho de tomate, deixe cozinhar por 3 minutos e reserve.</p>
                  <p> 3 - Derreta a margarina, coloque as 3 colheres de farinha de trigo e mexa.</p>
                  <p>4- Despeje uma parte do molho à bolonhesa, e monte camadas com a massa, presunto e mussarela.</p>
                  <p>5 -Finalize com o queijo ralado e leve ao forno alto (220° C), preaquecido, por cerca de 20 minutos.</p>
                </span>
              </div>
              <div className="lastDiv">
                <span>
                  <p><img src={timeIcon} alt="" /> Tempo de preparo: 60 min</p>
                  <p><img src={foodIcon} alt="" /> Rende 1 porção</p>
                </span>
                <div className="cooker">
                  <span>
                    Receita criada por:
                  </span>
                  <span>
                    Ronaldo Rodrigues
                  </span>
                  <img src={profileImg} alt="" />
                </div>
              </div>
            </div>
        </ContainerRecipe>
      </MainRecipeStyles>
      <Footer />
    </RecipePageStyles>
  );
};
