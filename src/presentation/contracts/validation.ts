export interface PresentationValidation {
  validate(fieldName: string, fieldValue: string): string | null;
}
