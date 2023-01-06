import { Header } from "../../components/Header/";
import Welcome from "../../assets/BemVindo.svg"
import { Button, HomeContainer, HomeFilterContainer, HomePublish } from "./styles";
import { FilterBtn } from "../../styles/FilterButton";
import { InputSearchContainer } from "../ProfilePage/styles";
import { Footer } from "../../components/Footer";
import { RecipesList } from "../../components/RecipesList";
export const HomePage = () => {
    return (
        <>
        <Header/>
        <HomeContainer>
            <div>
                <img src={Welcome} alt="Bem Vindo!" />
                <HomePublish>
                    <h1>Deseja Publicar Uma Receita?</h1>
                    <Button>+</Button>
                </HomePublish>
                <HomeFilterContainer>
                    <FilterBtn>Todos</FilterBtn>
                    <FilterBtn>Massas</FilterBtn>
                    <FilterBtn>Lanches</FilterBtn>
                    <FilterBtn>Carnes</FilterBtn>
                    <FilterBtn>Sobremesas</FilterBtn>
                </HomeFilterContainer>
                <InputSearchContainer></InputSearchContainer>
            </div>
            <RecipesList/>
            <RecipesList/>
        </HomeContainer>
        <Footer/>
        </>
    )
};
