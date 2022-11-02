import { DataLoginUseCase } from "@/data/useCases/auth/remoteLogin";
import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter";
import { AlignEnd } from "@/presentation/components/shared/AlignEnd";
import { Button } from "@/presentation/components/shared/Button";
import { Center } from "@/presentation/components/shared/Center";
import { Input } from "@/presentation/components/shared/Input";
import { Link } from "@/presentation/components/shared/Link";
import { Row } from "@/presentation/components/shared/Row";
import { Spacing } from "@/presentation/components/shared/Spacing";
import { useAuthStore } from "@/presentation/stores/auth";
import { useForm } from "react-hook-form";
import { Login as Form } from "@/domain/useCases/auth/login";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@/presentation/components/shared/ErrorMessage";
import { If } from "@/presentation/components/shared/If";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  useCase: DataLoginUseCase;
};

export function Login({ useCase }: Props) {
  const navigate = useNavigate();
  const saveToken = useAuthStore((state) => state.setToken);

  const schema = Yup.object().shape({
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: Yup.string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "A senha precisas de pelo menos: 1 caracter maiúsculoo, 1 caracter minúsculo, 1 dígito, 1 caracter especial e possuir pelo menos 8 caracteres no total"
      ),
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
    console.log(data);
    useCase.handle(data).then((res) => {
      saveToken(res.token);
    });
  }

  return (
    <Center>
      <LoginContainer>
        <AlignCenter>
          <h2>Login</h2>
        </AlignCenter>

        <Spacing size="xxl" />
        <Row wrap="wrap">
          <Input
            fullWidth
            placeholder="E-mail"
            hasErrors={!!errors.email}
            {...register("email")}
          />
          <If
            condition={!!errors.email}
            then={<ErrorMessage>{errors.email?.message}</ErrorMessage>}
          />

          <Input
            fullWidth
            placeholder="Senha"
            type="password"
            hasErrors={!!errors.password}
            {...register("password")}
          />
          <If
            condition={!!errors.password}
            then={<ErrorMessage>{errors.password?.message}</ErrorMessage>}
          />

          <AlignEnd>
            <Link onClick={() => navigate("/auth/forgot-password")}>
              Esqueci minha senha
            </Link>
          </AlignEnd>
        </Row>

        <Spacing size="xxl" />
        <Button
          color="primary"
          fullWidth
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Entrar
        </Button>
        <Spacing size="md" />
        <AlignCenter>
          <Link
            color="secondary"
            onClick={() => navigate("/auth/create-account")}
          >
            Criar Conta
          </Link>
        </AlignCenter>
      </LoginContainer>
    </Center>
  );
}
