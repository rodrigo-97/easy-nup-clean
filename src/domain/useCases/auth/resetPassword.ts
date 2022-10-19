type ResetPassword = {
    email: string,
    password: string,
    confirmPassword: string,
    token: string,
}

export interface DomainResetPasswordUseCase {
    handle: (
        {
            confirmPassword,
            email,
            password,
            token
        }: ResetPassword
    ) => Promise<void>
}