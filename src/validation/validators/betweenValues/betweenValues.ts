import { FieldValidation } from "@/validation/contracts/fieldValidation";
import { BetweenValuesError } from "@/validation/errors/betweenValues";

export class BetweenValuesValidator implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly minLength: number,
    private readonly maxLength: number
  ) {}

  validate(value: string): Error | null {
    const result =
      value.length >= this.minLength && value.length <= this.maxLength;

    if (!result) {
      return new BetweenValuesError(this.minLength, this.maxLength);
    }

    return null;
  }
}
