export class RequiredFieldError extends Error {
  constructor() {
    super("Campo obrigatório");
    super.name = "RequiredFieldError";
  }
}
