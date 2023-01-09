import { List, RecipeBtn, RecipeItem, RecipeItemContent } from "./styles";

import StarIcon from "../../assets/star_icon.svg";
import ViewIcon from "../../assets/view_icon.svg";
import DeleteIcon from "../../assets/delete_icon.svg";

import FoodImage from "../../assets/img_food_default.jfif";

export const RecipesList = () => {

    return (
        <List>
          <RecipeItem>
            <img src={FoodImage} />

            <RecipeItemContent>
              <div>
                <h3>Enroladinho de Salsicha</h3>

                <div className="avaliation_container">
                  <img src={StarIcon} className="star_icon"/>
                  <span>5.0</span>
                </div>
              </div>

              <span>Tempo de preparo: 40min</span>

              <div>
                <RecipeBtn btnColor="green">
                  <img src={ViewIcon} alt="Botão de ver receita" />
                </RecipeBtn>

                <RecipeBtn btnColor="pink">
                  <img src={DeleteIcon} alt="Botão de deletar receita" />
                </RecipeBtn>
              </div>
            </RecipeItemContent>
          </RecipeItem>

          <RecipeItem>
            <img src={FoodImage} />

            <RecipeItemContent>
              <div>
                <h3>Enroladinho de Salsicha</h3>

                <div className="avaliation_container">
                  <img src={StarIcon} className="star_icon"/>
                  <span>5.0</span>
                </div>
              </div>

              <span>Tempo de preparo: 40min</span>

              <div>
                <RecipeBtn btnColor="green">
                  <img src={ViewIcon} alt="Botão de ver receita" />
                </RecipeBtn>

                <RecipeBtn btnColor="pink">
                  <img src={DeleteIcon} alt="Botão de deletar receita" />
                </RecipeBtn>
              </div>
            </RecipeItemContent>
          </RecipeItem>

          <RecipeItem>
            <img src={FoodImage} />

            <RecipeItemContent>
              <div>
                <h3>Enroladinho de Salsicha</h3>

                <div className="avaliation_container">
                  <img src={StarIcon} className="star_icon"/>
                  <span>5.0</span>
                </div>
              </div>

              <span>Tempo de preparo: 40min</span>

              <div>
                <RecipeBtn btnColor="green">
                  <img src={ViewIcon} alt="Botão de ver receita" />
                </RecipeBtn>

                <RecipeBtn btnColor="pink">
                  <img src={DeleteIcon} alt="Botão de deletar receita" />
                </RecipeBtn>
              </div>
            </RecipeItemContent>
          </RecipeItem>

          <RecipeItem>
            <img src={FoodImage} />

            <RecipeItemContent>
              <div>
                <h3>Enroladinho de Salsicha</h3>

                <div className="avaliation_container">
                  <img src={StarIcon} className="star_icon"/>
                  <span>5.0</span>
                </div>
              </div>

              <span>Tempo de preparo: 40min</span>

              <div>
                <RecipeBtn btnColor="green">
                  <img src={ViewIcon} alt="Botão de ver receita" />
                </RecipeBtn>

                <RecipeBtn btnColor="pink">
                  <img src={DeleteIcon} alt="Botão de deletar receita" />
                </RecipeBtn>
              </div>
            </RecipeItemContent>
          </RecipeItem>

          <RecipeItem>
            <img src={FoodImage} />

            <RecipeItemContent>
              <div>
                <h3>Enroladinho de Salsicha</h3>

                <div className="avaliation_container">
                  <img src={StarIcon} className="star_icon"/>
                  <span>5.0</span>
                </div>
              </div>

              <span>Tempo de preparo: 40min</span>

              <div>
                <RecipeBtn btnColor="green">
                  <img src={ViewIcon} alt="Botão de ver receita" />
                </RecipeBtn>

                <RecipeBtn btnColor="pink">
                  <img src={DeleteIcon} alt="Botão de deletar receita" />
                </RecipeBtn>
              </div>
            </RecipeItemContent>
          </RecipeItem>
        </List>
    )
}