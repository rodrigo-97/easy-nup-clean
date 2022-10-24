export class EmailError extends Error {
  constructor() {
    super("E-mail inválido");
    super.name = "EmailError";
  }
}
