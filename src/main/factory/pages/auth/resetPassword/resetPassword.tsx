import { makeRemoteLogin } from "@/main/factory/useCases/auth/remoteLogin";
import { ResetPassword } from "@/presentation/pages/auth/ResetPassword";

export function makeResetPassword() {
  const remoteLogin = makeRemoteLogin();

  return <ResetPassword />;
}
