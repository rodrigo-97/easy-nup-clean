import { makeRemoteLogin } from "@/main/factory/useCases/auth/remoteLogin";
import { CreateAccount } from "@/presentation/pages/CreateAccount";

export function makeCreateAccount() {
  const remoteLogin = makeRemoteLogin();

  return <CreateAccount />;
}
