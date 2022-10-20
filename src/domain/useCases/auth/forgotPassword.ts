export interface RemoteDomainForgotPasswordUseCase {
  handle: (email: string) => Promise<void>;
}
