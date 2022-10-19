type ForgotPassword = {
  email: string;
};

export interface DomainForgotPasswordUseCase {
  handle: (forgotPassword: ForgotPassword) => Promise<void>;
}
