import { makeRemoteLogin } from "@/main/factory/useCases/auth/remoteLogin";
import { Login } from "@/presentation/pages/auth/Login";

export function makeLogin() {
  const remoteLogin = makeRemoteLogin();

  return <Login useCase={remoteLogin} />;
}
