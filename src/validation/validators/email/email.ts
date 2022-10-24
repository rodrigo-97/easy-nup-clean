import { FieldValidation } from "@/validation/contracts/fieldValidation";
import { EmailError } from "@/validation/errors/email";

export class EmailValidator implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    const result =
      !value || value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!result) {
      return new EmailError();
    }

    return null;
  }
}
