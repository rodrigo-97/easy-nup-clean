type Login = {
  email: string;
  password: string;
};

export interface DomainLoginUseCase {
  handle: (login: Login) => Promise<void>;
}
