import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ContainerStyle, FormLogin, MainStyle } from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { LoginFormSchema } from "./LoginFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iLoginData } from "../../contexts/UserContext/types";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(LoginFormSchema),
  });
  const { loginUser } = useContext(UserContext);

  const submitLogin: SubmitHandler<iLoginData> = async (data) => {
    await loginUser(data);
  };

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
            <FormLogin onSubmit={handleSubmit(submitLogin)}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Digite seu email..."
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <label htmlFor="">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha..."
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <Link to="/register" className="forgotPass">
                Esqueceu sua senha?
              </Link>

              <button className="btnLogin">
                Entrar <AiOutlineArrowRight />{" "}
              </button>
            </FormLogin>

            <div className="divRegister">
              <p>Não possui uma conta?</p>
              <Link to="/register">Cadastre-se!</Link>
            </div>
          </section>
        </div>
      </ContainerStyle>
    </MainStyle>
  );
};
