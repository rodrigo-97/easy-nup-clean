import { makeRemoteCreateAccount } from "@/main/factory/useCases/auth/createAccount";
import { CreateAccount } from "@/presentation/pages/auth/CreateAccount";
import { ValidationBuilder } from "@/validation/builder/validationBuilder";
import { Validator } from "@/validation/singleton/validator";
import { ValidationComposite } from "@/validation/validationComposite/validationComposite";

export function makeCreateAccount() {
  const remoteCreateAccount = makeRemoteCreateAccount();
  const validation = ValidationComposite.build([
    ...ValidationBuilder.field("email").required().email().build(),
    ...ValidationBuilder.field("name").required().minLength(3).build(),
    ...ValidationBuilder.field("password").required().password().build(),
    ...ValidationBuilder.field("confirmPassword").required().password().build(),
  ]);
  const validator = Validator;

  return (
    <CreateAccount
      useCase={remoteCreateAccount}
      validation={validation}
      validator={validator}
    />
  );
}
