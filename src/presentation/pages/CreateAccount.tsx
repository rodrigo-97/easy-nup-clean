import { useNavigate } from "react-router-dom";
import { LoginContainer } from "../components/auth/loginContainer";
import { AlignCenter } from "../components/shared/AlignCenter";
import { Button } from "../components/shared/Button";
import { Center } from "../components/shared/Center";
import { Input } from "../components/shared/Input";
import { Link } from "../components/shared/Link";
import { Row } from "../components/shared/Row";
import { Spacing } from "../components/shared/Spacing";

export function CreateAccount() {
  const navigate = useNavigate();

  return (
    <Center>
      <LoginContainer>
        <AlignCenter>
          <h2>Criar conta</h2>
        </AlignCenter>

        <Spacing size="xl" />
        <Row wrap="no-wrap">
          <Input fullWidth placeholder="E-mail" />
        </Row>

        <Spacing size="xxl" />
        <Button color="primary" fullWidth>
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
