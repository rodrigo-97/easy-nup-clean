type ResetPassword = {
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
};

export interface DomainResetPasswordUseCase {
  handle: (resetPassword: ResetPassword) => Promise<void>;
}
