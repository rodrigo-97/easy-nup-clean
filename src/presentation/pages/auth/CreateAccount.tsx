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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  useCase: DataCreateAccountUseCase;
};

export type Errors = {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  name: string | null;
};

export function CreateAccount({ useCase }: Props) {
  const navigate = useNavigate();

  const [isFormValid, setIsformValid] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    name: false,
  });

  useEffect(() => { }, [form, validation]);

  useEffect(() => {
    const hasErrors = Object.values(errors).some(
      (error) => typeof error === "string"
    );

    if (hasErrors) {
      setIsformValid(false);
    } else {
      setIsformValid(true);
    }
  }, [errors]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setForm({
      ...form,
      [key]: e.target.value,
    });

    setTouched({
      ...touched,
      [key]: true,
    });
  }

  function onSubmit() {
    // useCase.handle(form);
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
              <Input
                fullWidth
                placeholder="E-mail"
                onChange={(e) => onChange(e, "email")}
                hasErrors={!!errors.email && touched.email}
              />
            }
            error={!!errors.email && touched.email}
            errorMessage={errors.email}
          />

          <FormGroup
            input={
              <Input
                fullWidth
                placeholder="Nome"
                onChange={(e) => onChange(e, "name")}
                hasErrors={!!errors.name && touched.name}
              />
            }
            error={!!errors.name && touched.name}
            errorMessage={errors.name}
          />

          <FormGroup
            input={
              <Input
                type="password"
                fullWidth
                placeholder="Senha"
                onChange={(e) => onChange(e, "password")}
                hasErrors={!!errors.password && touched.password}
              />
            }
            error={!!errors.password && touched.password}
            errorMessage={errors.password}
          />

          <FormGroup
            input={
              <Input
                type="password"
                fullWidth
                placeholder="Confirmar senha"
                onChange={(e) => onChange(e, "confirmPassword")}
                hasErrors={!!errors.confirmPassword && touched.confirmPassword}
              />
            }
            error={!!errors.confirmPassword && touched.confirmPassword}
            errorMessage={errors.confirmPassword}
          />
        </Row>

        <Spacing size="xxl" />
        <Button
          color="primary"
          fullWidth
          // disabled={!isFormValid}
          onClick={onSubmit}
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
