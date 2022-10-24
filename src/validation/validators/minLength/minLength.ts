import { MinLengthError } from "@/validation/errors/minLength";
import { FieldValidation } from "@/validation/contracts/fieldValidation";

export class MinLengthValidator implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(value: string): Error | null {
    const result = value.length < this.minLength;

    if (result) {
      return new MinLengthError(this.minLength);
    }

    return null;
  }
}
