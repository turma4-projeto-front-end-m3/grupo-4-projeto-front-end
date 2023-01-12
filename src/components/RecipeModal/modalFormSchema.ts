import * as yup from "yup";

export const modalFormSchema = yup.object().shape({
    recipeName: yup.string().required("O nome da receita é obrigatório"),
    category: yup.string().required("A categoria é obrigatória"),
    prepTime: yup.string().required("O tempo de preparo é obrigatório"),
    portions: yup.string().required("O rendimento da receita é obrigatório"),
    description: yup.string().required("A descrição é obrigatória"),
    recipeImg: yup.string().required("A imagem da receita é obrigatória"),
    rating: yup.string().required("A avaliação é obrigatória"),
    
})