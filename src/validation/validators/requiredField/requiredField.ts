import { FieldValidation } from "../../contracts/fieldValidation";
import { RequiredFieldError } from "../../errors/requiredField";

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    return value ? null : new RequiredFieldError();
  }
}
