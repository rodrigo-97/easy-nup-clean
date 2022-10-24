import { makeRemoteLogin } from "@/main/factory/useCases/auth/remoteLogin";
import { Login } from "@/presentation/pages/Login";
import { ValidationBuilder } from "@/validation/builder/validationBuilder";
import { ValidationComposite } from "@/validation/validationComposite/validationComposite";

export function makeLogin() {
  const remoteLogin = makeRemoteLogin();
  const validation = ValidationComposite.build([
    ...ValidationBuilder.field("email").required().email().build(),
    ...ValidationBuilder.field("password").required().password().build(),
  ]);

  return <Login loginUsecase={remoteLogin} validation={validation} />;
}
