export class PasswordError extends Error {
  constructor() {
    super(
      "A senha precisa conter pelo menos: 1 dígito, 1 letra maiúscula, 1 letra minúscula, 1 caracter especial e possuir de 8 a 16 caracteres"
    );
    super.name = "PasswordError";
  }
}
