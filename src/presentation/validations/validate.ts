import { AnySchema, ValidationError } from "yup";

export async function validate(schema: AnySchema, data: any) {
  try {
    const errors = await schema.validate(data);
  } catch (error) {
    console.log(error);
  }
}
