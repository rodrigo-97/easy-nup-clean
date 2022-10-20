export class CouldNotLogin extends Error {
  constructor() {
    super("Não foi possível realizar login");
    super.message = "CouldNotLogin";
  }
}
