import { useNavigate } from "react-router-dom";
import { LoginContainer } from "../components/auth/loginContainer";
import { AlignCenter } from "../components/shared/AlignCenter";
import { Button } from "../components/shared/Button";
import { Center } from "../components/shared/Center";
import { Input } from "../components/shared/Input";
import { Row } from "../components/shared/Row";
import { Spacing } from "../components/shared/Spacing";

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
