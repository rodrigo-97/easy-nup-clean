import { makeRemoteForgotPassword } from "@/main/factory/useCases/auth/forgotPassword";
import { ForgotPassword } from "@/presentation/pages/auth/ForgotPassword";

export function makeForgotPassword() {
  const remoteForgotPassword = makeRemoteForgotPassword();

  return <ForgotPassword useCase={remoteForgotPassword} />;
}
