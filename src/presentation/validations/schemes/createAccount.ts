import * as Yup from "yup";

export const createAccountSchema = Yup.object().shape({
  email: Yup.string().required("Campo obrigatório").email(),
  name: Yup.string()
    .required("Campo obrigatório")
    .min(3, "O nome precisa conter pelo menos 3 caracteres"),
  password: Yup.string()
    .required("Campo obrigatório")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
  confirmPassword: Yup.string()
    .required("Campo obrigatório")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .oneOf([Yup.ref("password"), null], "Senhas divergentess"),
});
