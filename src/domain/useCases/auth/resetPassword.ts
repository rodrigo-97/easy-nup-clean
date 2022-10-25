export type ResetPassword = {
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
};

export interface RemoteDomainResetPasswordUseCase {
  handle: (resetPassword: ResetPassword) => Promise<void>;
}
