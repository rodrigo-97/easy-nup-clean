import { makeRemoteCreateAccount } from "@/main/factory/useCases/auth/createAccount";
import { CreateAccount } from "@/presentation/pages/auth/CreateAccount";

export function makeCreateAccount() {
  const remoteCreateAccount = makeRemoteCreateAccount();

  return <CreateAccount useCase={remoteCreateAccount} />;
}
