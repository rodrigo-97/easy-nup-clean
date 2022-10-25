import { DataForgotPasswordUseCase } from "@/data/useCases/auth/remoteForgotPassword";
import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter";
import { Button } from "@/presentation/components/shared/Button";
import { Center } from "@/presentation/components/shared/Center";
import { ErrorMessage } from "@/presentation/components/shared/ErrorMessage";
import { If } from "@/presentation/components/shared/If";
import { Input } from "@/presentation/components/shared/Input";
import { Link } from "@/presentation/components/shared/Link";
import { Row } from "@/presentation/components/shared/Row";
import { Spacing } from "@/presentation/components/shared/Spacing";
import { ValidationComposite } from "@/validation/validationComposite/validationComposite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  useCase: DataForgotPasswordUseCase;
  validation: ValidationComposite;
};

export function ForgotPassword({ useCase, validation }: Props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>("");
  const [touched, setTouched] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setTouched(true);
  }

  useEffect(() => {
    const error = validation.validate("email", email);
    setError(error);
  }, [email, validation]);

  function handleSubmit() {
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
            onChange={onChange}
            hasErrors={!!error && touched}
          />
          <If
            condition={!!error && touched}
            then={<ErrorMessage>{error}</ErrorMessage>}
          />
        </Row>

        <Spacing size="xxl" />
        <Button
          color="primary"
          fullWidth
          disabled={!!error}
          onClick={handleSubmit}
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
