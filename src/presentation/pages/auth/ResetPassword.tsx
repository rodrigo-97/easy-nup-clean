import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter";
import { Button } from "@/presentation/components/shared/Button";
import { Center } from "@/presentation/components/shared/Center";
import { Input } from "@/presentation/components/shared/Input";
import { Row } from "@/presentation/components/shared/Row";
import { Spacing } from "@/presentation/components/shared/Spacing";
import { useNavigate } from "react-router-dom";

export function ResetPassword() {
  const navigate = useNavigate();

  return (
    <Center>
      <LoginContainer>
        <AlignCenter>
          <h2>Alterar senha</h2>
        </AlignCenter>

        <Spacing size="xl" />
        <Row wrap="wrap">
          <Input fullWidth placeholder="E-mail" />
          <Input fullWidth placeholder="Senha" />
          <Input fullWidth placeholder="Confirmar senha" />
        </Row>

        <Spacing size="xxl" />
        <Button color="primary" fullWidth>
          Alterar senha
        </Button>
      </LoginContainer>
    </Center>
  );
}
