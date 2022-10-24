export type Login = {
  email: string;
  password: string;
};

export type DomainLoginResponse = {
  token: string;
  type: string;
};

export interface RemoteDomainLoginUseCase {
  handle: (login: Login) => Promise<DomainLoginResponse>;
}
