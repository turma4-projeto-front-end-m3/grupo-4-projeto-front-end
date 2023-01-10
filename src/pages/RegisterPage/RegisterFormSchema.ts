import * as yup from "yup";
import { SchemaOf } from "yup";
import { iRegisterData } from "../../contexts/UserContext";

export const RegisterFormSchema: 
SchemaOf<iRegisterData> = yup.object().shape({
  
  username: yup
  .string()
  .required("O nome é obrigatório!")
  .min(10, "O nome precisa ter no mínimo 10 caracteres"),

email: yup
  .string()
  .required("O email é obrigatório!")
  .email("É necessário fornecer um email"),

password: yup
  .string()
  .required("A senha é obrigatória")
  .matches(/^(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
  .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
  .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
  .matches(
    /(?=.*?[#?!@$%^&*-])/,
    "é necessário pelo menos um caractere especial."
  )
  .matches(/.{8,}$/, "A senha deve ter no mínimo 8 dígitos."),

retypePassword: yup
  .string()
  .required("Por favor, insira novamente a sua senha")
  .oneOf([yup.ref("password")], "suas senhas não coincidem"),
});

