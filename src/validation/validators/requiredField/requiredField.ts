import { FieldValidation } from "@/validation/contracts/fieldValidation";
import { RequiredFieldError } from "@/validation/errors/requiredField";

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    return value ? null : new RequiredFieldError();
  }
}
