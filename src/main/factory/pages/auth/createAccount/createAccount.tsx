import { makeRemoteLogin } from "@/main/factory/useCases/auth/remoteLogin";
import { CreateAccount } from "@/presentation/pages/auth/CreateAccount";

export function makeCreateAccount() {
  const remoteLogin = makeRemoteLogin();

  return <CreateAccount />;
}
