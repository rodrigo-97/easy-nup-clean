import { DataCreateAccountUseCase } from "@/data/useCases/auth/remoteCreateAccount";
import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter";
import { Button } from "@/presentation/components/shared/Button";
import { Center } from "@/presentation/components/shared/Center";
import { FormGroup } from "@/presentation/components/shared/FormGroup";
import { Input } from "@/presentation/components/shared/Input";
import { Link } from "@/presentation/components/shared/Link";
import { Row } from "@/presentation/components/shared/Row";
import { Spacing } from "@/presentation/components/shared/Spacing";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

type Props = {
  useCase: DataCreateAccountUseCase;
};

export type Form = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
};

export function CreateAccount({ useCase }: Props) {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),

    name: Yup.string()
      .required("Campoo obrigatório")
      .min(3, "O nome precisa ter no mínimooo 3 caracteres"),
    password: Yup.string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "A senha precisas de pelo menos: 1 caracter maiúsculoo, 1 caracter minúsculo, 1 dígito, 1 caracter especial e possuir pelo menos 8 caracteres no total"
      ),
    confirmPassword: Yup.string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "A senha precisas de pelo menos: 1 caracter maiúsculoo, 1 caracter minúsculo, 1 dígito, 1 caracter especial e possuir pelo menos 8 caracteres no total"
      )
      .oneOf([Yup.ref("password"), null], "As senhas estão diferentes"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  function onSubmit(data: Form) {
    useCase.handle(data);
  }

  return (
    <Center>
      <LoginContainer>
        <AlignCenter>
          <h2>Criar conta</h2>
        </AlignCenter>

        <Spacing size="xl" />
        <Row wrap="wrap">
          <FormGroup
            input={
              <Input fullWidth placeholder="E-mail" {...register("email")} />
            }
          />

          <FormGroup
            input={<Input fullWidth placeholder="Nome" {...register("name")} />}
          />

          <FormGroup
            error={!!errors.password}
            errorMessage={errors.password?.message}
            input={
              <Input
                type="password"
                fullWidth
                placeholder="Senha"
                hasErrors={!!errors.password}
                {...register("password")}
              />
            }
          />

          <FormGroup
            error={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
            input={
              <Input
                type="password"
                fullWidth
                placeholder="Confirmar senha"
                hasErrors={!!errors.confirmPassword}
                {...register("confirmPassword")}
              />
            }
          />
        </Row>

        <Spacing size="xxl" />
        <Button
          color="primary"
          fullWidth
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Criar conta
        </Button>
        <Spacing size="md" />
        <AlignCenter>
          <Link onClick={() => navigate(-1)}>Voltar</Link>
        </AlignCenter>
      </LoginContainer>
    </Center>
  );
}
