import { FieldValidation } from "@/validation/contracts/fieldValidation";
import { EqualToError } from "@/validation/errors/equalTo";

export class EqualToValidator implements FieldValidation {
  constructor(readonly field: string, readonly otherFieldValue: string) {}

  validate(value: string): Error | null {
    const result = value === this.otherFieldValue;

    if (result) {
      return new EqualToError(this.field, this.otherFieldValue);
    }

    return null;
  }
}
