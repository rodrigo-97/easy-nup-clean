import { makeRemoteResetPassword } from "@/main/factory/useCases/auth/resetPassword";
import { ResetPassword } from "@/presentation/pages/auth/ResetPassword";

export function makeResetPassword() {
  const remoteResetPassword = makeRemoteResetPassword();

  return <ResetPassword useCase={remoteResetPassword} />;
}
