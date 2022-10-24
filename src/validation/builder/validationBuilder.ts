import { FieldValidation } from "../contracts/fieldValidation";
import { BetweenValuesValidator } from "../validators/betweenValues/betweenValues";
import { EmailValidator } from "../validators/email/email";
import { MinLengthValidator } from "../validators/minLength/minLength";
import { PasswordValidator } from "../validators/password/password";
import { RequiredFieldValidation } from "../validators/requiredField/requiredField";

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName));
    return this;
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidator(this.fieldName));
    return this;
  }

  minLength(minLength: number): ValidationBuilder {
    this.validations.push(new MinLengthValidator(this.fieldName, minLength));
    return this;
  }

  betweenValues(minLength: number, maxLength: number): ValidationBuilder {
    this.validations.push(
      new BetweenValuesValidator(this.fieldName, minLength, maxLength)
    );
    return this;
  }

  password(): ValidationBuilder {
    this.validations.push(new PasswordValidator(this.fieldName));
    return this;
  }

  build(): FieldValidation[] {
    return this.validations;
  }
}
