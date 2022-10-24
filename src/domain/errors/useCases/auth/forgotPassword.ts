export class CouldNotForgetPassword extends Error {
  constructor() {
    super("Não foi possível enviar e-mail para recuperação de senha");
    super.message = "CouldNotForgetPassword";
  }
}
