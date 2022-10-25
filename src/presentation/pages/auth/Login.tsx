import { DataLoginUseCase } from "@/data/useCases/auth/remoteLogin";
import { ValidationComposite } from "@/validation/validationComposite/validationComposite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter";
import { AlignEnd } from "@/presentation/components/shared/AlignEnd";
import { Button } from "@/presentation/components/shared/Button";
import { Center } from "@/presentation/components/shared/Center";
import { ErrorMessage } from "@/presentation/components/shared/ErrorMessage";
import { If } from "@/presentation/components/shared/If";
import { Input } from "@/presentation/components/shared/Input";
import { Link } from "@/presentation/components/shared/Link";
import { Row } from "@/presentation/components/shared/Row";
import { Spacing } from "@/presentation/components/shared/Spacing";
import { useAuthStore } from "@/presentation/stores/auth";

type Props = {
  useCase: DataLoginUseCase;
  validation: ValidationComposite;
};

export type Errors = {
  email: string | null;
  password: string | null;
};

export function Login({ useCase, validation }: Props) {
  const navigate = useNavigate();
  const saveToken = useAuthStore((state) => state.setToken);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [formTouched, setFormTouched] = useState({
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  });

  const [isFormIsValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const emailError = validation.validate("email", form.email);
    const passwordError = validation.validate("password", form.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });
  }, [form.email, form.password, validation]);

  useEffect(() => {
    const hasErrors = Object.values(errors).some(
      (error) => typeof error === "string"
    );

    if (hasErrors) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errors]);

  function handleSubmit() {
    useCase.handle(form).then((res) => {
      saveToken(res.token);
    });
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setForm({
      ...form,
      [key]: e.target.value,
    });

    setFormTouched({
      ...formTouched,
      [key]: true,
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
            hasErrors={!!errors.email && formTouched.email}
            onChange={(e) => onChange(e, "email")}
          />
          <If
            condition={formTouched.email}
            then={<ErrorMessage>{errors.email}</ErrorMessage>}
          />

          <Input
            fullWidth
            placeholder="Senha"
            hasErrors={!!errors.password && formTouched.password}
            type="password"
            onChange={(e) => onChange(e, "password")}
          />
          <If
            condition={formTouched.password}
            then={<ErrorMessage>{errors.password}</ErrorMessage>}
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
          onClick={handleSubmit}
          disabled={!isFormIsValid}
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
