import { makeRemoteResetPassword } from "@/main/factory/useCases/auth/resetPassword";
import { ResetPassword } from "@/presentation/pages/auth/ResetPassword";
import { ValidationBuilder } from "@/validation/builder/validationBuilder";
import { ValidationComposite } from "@/validation/validationComposite/validationComposite";

export function makeResetPassword() {
  const remoteResetPassword = makeRemoteResetPassword();
  const validation = ValidationComposite.build([
    ...ValidationBuilder.field("email").required().email().build(),
    ...ValidationBuilder.field("password").required().password().build(),
    ...ValidationBuilder.field("confirmPassword")
      .required()
      .password()
      .equalTo("password")
      .build(),
  ]);

  return (
    <ResetPassword useCase={remoteResetPassword} validation={validation} />
  );
}
