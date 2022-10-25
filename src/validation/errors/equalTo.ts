export class EqualToError extends Error {
  constructor(field: string, otherField: string) {
    super(`Os campos ${field} e ${otherField} devem possuir valores iguais`);
    super.name = "EqualToError";
  }
}
