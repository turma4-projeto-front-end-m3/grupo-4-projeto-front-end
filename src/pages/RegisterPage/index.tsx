import { ContainerStyle, FormRegister, MainStyle } from "./styles"
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { AiOutlineArrowRight } from "react-icons/ai";

export const RegisterPage = ( ) => {
    return (
        <MainStyle>
            <ContainerStyle>
                <div className="container2">
                    <section className="sectionDir">

                        <div className="letsCooking">
                            <h2>Vamos cozinhar?</h2>
                            <p>Receitas despertam memórias, compartilhe-as!</p>
                            </div>

                        <div className="divWelcome">
                            <h2>Olá</h2>
                            <h3>Bem vindo!</h3>
                        </div>

                        <div className="divLogo">
                            <img src={Logo} alt="Logo Marca" />
                            <h1>MyRecipes</h1>
                        </div>

                    </section>

                    <section className="sectionFormRegister">
                        <h2>Cadastre-se</h2>
                        <p>Vamos ajudá-lo a criar sua conta, é rapido e fácil!</p>

                        <FormRegister>
                            <label>Nome</label>
                            <input type="text" placeholder="Digite seu nome" />

                            <label>Foto de Perfil</label>
                            <input type="text" placeholder="Url da imagem" />

                            <label>Email</label>
                            <input type="email" placeholder="Digite seu email" />

                            <label>Senha</label>
                            <input type="password" placeholder="Digite sua senha" />

                            <label>Confirme sua senha</label>
                            <input type="password" placeholder="Digite sua senha novamente" />

                            <Link to="/homePage" className="btnRegister">Cadastrar <AiOutlineArrowRight/> </Link>
                        </FormRegister>

                        <div className="divLogin">
                            <p>Você já possui uma conta?</p>
                            <Link to="/loginPage">Faça login!</Link>
                        </div>
                     </section>
                </div>
            </ContainerStyle>
        </MainStyle>
    )
}