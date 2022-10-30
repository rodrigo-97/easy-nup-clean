export class CouldNotCreateAccount extends Error {
  constructor() {
    super("Não foi possível cadastrar usuário");
    super.message = "CouldNotCreateAccount";
  }
}
