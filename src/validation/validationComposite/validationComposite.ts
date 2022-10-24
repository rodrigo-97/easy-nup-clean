import { PresentationValidation } from "@/presentation/contracts/validation";
import { FieldValidation } from "../contracts/fieldValidation";

export class ValidationComposite implements PresentationValidation {
  private constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators);
  }

  validate(fieldName: string, fieldValue: string): string | null {
    const validators = this.validators.filter((v) => v.field === fieldName);

    for (const validator of validators) {
      const error = validator.validate(fieldValue);

      if (error) {
        return error.message;
      }
    }

    return null;
  }
}