import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { ContainerStyle, FormLogin, MainStyle } from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai"

export const LoginPage = () => {
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

        <section className="sectionFormLogin">
            <h2>Login</h2>
          <FormLogin>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Digite seu email..." />

            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha..." />

            <Link to="/registerPage" className="forgotPass">Esqueceu sua senha?</Link>

            <Link to="/homePage" className="btnLogin">Entrar <AiOutlineArrowRight/> </Link>

          </FormLogin>

        <div className="divRegister">
          <p>Não possui uma conta?</p>
          <Link to="/registerPage">Cadastre-se!</Link>
        </div>
      </section>

      </div>
      </ContainerStyle>
    </MainStyle>
  
  );
};
