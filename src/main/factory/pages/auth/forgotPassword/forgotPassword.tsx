import { makeRemoteForgotPassword } from "@/main/factory/useCases/auth/forgotPassword";
import { ForgotPassword } from "@/presentation/pages/auth/ForgotPassword";
import { ValidationBuilder } from "@/validation/builder/validationBuilder";
import { ValidationComposite } from "@/validation/validationComposite/validationComposite";

export function makeForgotPassword() {
  const remoteForgotPassword = makeRemoteForgotPassword();
  const validation = ValidationComposite.build(
    ValidationBuilder.field("email").required().email().build()
  );

  return (
    <ForgotPassword
      forgotPasswordUsecase={remoteForgotPassword}
      validation={validation}
    />
  );
}
