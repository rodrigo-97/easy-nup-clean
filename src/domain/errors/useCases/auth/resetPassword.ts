export class CouldNotResetPassword extends Error {
  constructor() {
    super("Não foi possível alterar senha");
    super.message = "CouldNotResetPassword";
  }
}
