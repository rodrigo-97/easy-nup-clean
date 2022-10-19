type ForgotPassword = {
    email: string
}

export interface DomainForgotPasswordUseCase {
    handle: ({ email }: ForgotPassword) => Promise<void>
}