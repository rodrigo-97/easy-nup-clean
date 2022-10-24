export class MinLengthError extends Error {
  constructor(minValue: number) {
    super(`O campo precisa ter no mínimo ${minValue}`);
    super.name = "MinLengthError";
  }
}
