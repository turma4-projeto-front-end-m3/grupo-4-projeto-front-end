import { ContainerStyle, ErrorMessage, FormRegister, MainStyle } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iRegisterData } from "../../contexts/UserContext/types";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver(RegisterFormSchema),
  });
  const { registerUser } = useContext(UserContext);

  const submitRegister: SubmitHandler<iRegisterData> = async (data) => {
    await registerUser(data);
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

          <section className="sectionFormRegister">
            <h2>Cadastre-se</h2>
            <p className="descFormRegister">Vamos ajudá-lo a criar sua conta, é rapido e fácil!</p>

            <FormRegister onSubmit={handleSubmit(submitRegister)}>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                {...register("username")}
              />
              {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

              <label>Foto de Perfil</label>
              <input type="text" placeholder="Url da imagem" {...register("img")}/>
              {errors.img && <ErrorMessage>{errors.img.message}</ErrorMessage>}

              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

              <label>Confirme sua senha</label>
              <input
                type="password"
                placeholder="Digite sua senha novamente"
                {...register("retypePassword")}
              />
              {errors.retypePassword && <ErrorMessage>{errors.retypePassword.message}</ErrorMessage>}

              <button className="btnRegister">
                Cadastrar <AiOutlineArrowRight />{" "}
              </button>
            </FormRegister>

            <div className="divLogin">
              <p>Você já possui uma conta?</p>
              <Link to="/login">Faça login!</Link>
            </div>
          </section>
        </div>
      </ContainerStyle>
    </MainStyle>
  );
};
