import { LoginContainer } from "@/presentation/components/auth/loginContainer";
import { AlignCenter } from "@/presentation/components/shared/AlignCenter";
import { Button } from "@/presentation/components/shared/Button";
import { Center } from "@/presentation/components/shared/Center";
import { Input } from "@/presentation/components/shared/Input";
import { Link } from "@/presentation/components/shared/Link";
import { Row } from "@/presentation/components/shared/Row";
import { Spacing } from "@/presentation/components/shared/Spacing";
import { useNavigate } from "react-router-dom";

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
