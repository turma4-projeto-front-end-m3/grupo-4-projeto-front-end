import * as yup from "yup";
import { SchemaOf } from "yup";
import { iLoginData } from "../../contexts/UserContext/types";

export const LoginFormSchema: SchemaOf<iLoginData> = yup.object().shape({
  email: yup.string().email().required("O nome é obrigatório."),

  password: yup.string().required("A senha é obrigatória!"),
});
