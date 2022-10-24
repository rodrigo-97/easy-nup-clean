export class BetweenValuesError extends Error {
  constructor(min: number, max: number) {
    super(`O valor do campo precisa estar entre ${min} e ${max} caracteres`);
    super.name = "BetweenValuesError";
  }
}
