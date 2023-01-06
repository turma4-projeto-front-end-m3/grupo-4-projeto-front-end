import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { Container, Main } from "./styles"
import { AiOutlineArrowRight } from "react-icons/ai"

export const LadingPage = () => {
    return (
        <Main>
            <Container>

            <div className="section">
                
                <div className="logo">
                    <img src={logo} alt="Logomarca" />
                    <h1>MyRecipes</h1>
                </div>
                

                <div className="description">
                    <h2>Vamos Cozinhar?</h2>
                    <p>Receitas despertam memórias, compartilhe-as!</p>
                </div>
            </div>

                <Link to="/loginPage">Começar a cozinhar <AiOutlineArrowRight/> </Link>

            </Container>
        </Main>
    );
  };
  