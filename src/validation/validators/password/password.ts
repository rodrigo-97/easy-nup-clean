import { PasswordError } from "@/validation/errors/password";
import { FieldValidation } from "@/validation/contracts/fieldValidation";

export class PasswordValidator implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    const result = value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    );

    if (!result) {
      return new PasswordError();
    }

    return null;
  }
}
