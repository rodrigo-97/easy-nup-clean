import { makeRemoteLogin } from "@/main/factory/useCases/auth/remoteLogin";
import { useEffect, useState } from "react";
import { LoginContainer } from "../components/auth/loginContainer";
import { Base } from "../components/Base";
import { AlignEnd } from "../components/shared/AlignEnd";
import { Button } from "../components/shared/Button";
import { Center } from "../components/shared/Center";
import { Input } from "../components/shared/Input";
import { Link } from "../components/shared/Link";
import { Row } from "../components/shared/Row";
import { Spacing } from "../components/shared/Spacing";

export function Login() {
  const [data, setData] = useState<any>();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const response = async () =>
      await makeRemoteLogin().handle({ email: "roeds", password: "asas" });

    setData(response);

    return () => {
      response;
    };
  }, []);

  console.log(data);

  return (
    <Center>
      <LoginContainer>
        <h2>Login</h2>

        <Spacing size="xxl" />

        <Row wrap="wrap">
          <Input fullWidth placeholder="E-mail" />
          <Input fullWidth placeholder="Senha" />
          <AlignEnd>
            <Link>Esqueci minha senha</Link>
          </AlignEnd>
        </Row>

        <Spacing size="xxl" />
        <Row wrap="wrap">
          <Button color="primary" fullWidth>
            Entrar
          </Button>
          <Button color="secondary" fullWidth>
            Criar Conta
          </Button>
        </Row>
      </LoginContainer>
    </Center>
  );
}
