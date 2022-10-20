export type Login = {
  email: string;
  password: string;
};

export interface RemoteDomainLoginUseCase {
  handle: (login: Login) => Promise<void>;
}
