import { DataForgotPasswordUseCase } from "@/data/useCases/auth/remoteForgotPassword";
import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter/AlignCenter";
import { Button } from "@/presentation/components/shared/Button/Button";
import { Center } from "@/presentation/components/shared/Center/Center";
import { ErrorMessage } from "@/presentation/components/shared/ErrorMessage/ErrorMessage";
import { If } from "@/presentation/components/shared/If";
import { Input } from "@/presentation/components/shared/Input/Input";
import { Link } from "@/presentation/components/shared/Link/Link";
import { Row } from "@/presentation/components/shared/Row/Row";
import { Spacing } from "@/presentation/components/shared/Spacing/Spacing";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

type Props = {
  useCase: DataForgotPasswordUseCase;
};

export function ForgotPassword({ useCase }: Props) {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  function onSubmit({ email }: { email: string }) {
    useCase.handle(email);
  }

  return (
    <Center>
      <LoginContainer>
        <AlignCenter>
          <h2>Recuperar senha</h2>
        </AlignCenter>

        <Spacing size="xl" />
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
        </Row>

        <Spacing size="xxl" />
        <Button
          color="primary"
          fullWidth
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Recuperar senha
        </Button>
        <Spacing size="md" />
        <AlignCenter>
          <Link onClick={() => navigate(-1)}>Voltar</Link>
        </AlignCenter>
      </LoginContainer>
    </Center>
  );
}
