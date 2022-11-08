import { DataResetPasswordUseCase } from "@/data/useCases/auth/remoteResetPassword";
import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter/AlignCenter";
import { Button } from "@/presentation/components/shared/Button/Button";
import { Center } from "@/presentation/components/shared/Center/Center";
import { FormGroup } from "@/presentation/components/shared/FormGroup";
import { Input } from "@/presentation/components/shared/Input/Input";
import { Row } from "@/presentation/components/shared/Row/Row";
import { Spacing } from "@/presentation/components/shared/Spacing/Spacing";
import React, { useState } from "react";

type Props = {
  useCase: DataResetPasswordUseCase;
};

type Errors = {
  confirmPassword: string | null;
  email: string | null;
  password: string | null;
};

export function ResetPassword({ useCase }: Props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formTouched, setFormTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setForm({ ...form, [key]: e.target.value });
    setFormTouched({ ...formTouched, [key]: true });
  }

  console.log(errors);

  return (
    <Center>
      <LoginContainer>
        <AlignCenter>
          <h2>Alterar senha</h2>
        </AlignCenter>

        <Spacing size="xl" />
        <Row wrap="wrap">
          <FormGroup
            errorMessage={errors.email}
            error={!!errors.email && formTouched.email}
            input={
              <Input
                fullWidth
                placeholder="E-mail"
                hasErrors={!!errors.email && formTouched.email}
                onChange={(e) => onChange(e, "email")}
              />
            }
          />

          <FormGroup
            errorMessage={errors.password}
            error={!!errors.password && formTouched.password}
            input={
              <Input
                fullWidth
                placeholder="Senha"
                hasErrors={!!errors.password && formTouched.password}
                onChange={(e) => onChange(e, "password")}
              />
            }
          />

          <FormGroup
            errorMessage={errors.confirmPassword}
            error={!!errors.confirmPassword && formTouched.confirmPassword}
            input={
              <Input
                fullWidth
                hasErrors={
                  !!errors.confirmPassword && formTouched.confirmPassword
                }
                placeholder="Confirmar senha"
                onChange={(e) => onChange(e, "confirmPassword")}
              />
            }
          />
        </Row>

        <Spacing size="xxl" />
        <Button color="primary" fullWidth>
          Alterar senha
        </Button>
      </LoginContainer>
    </Center>
  );
}
