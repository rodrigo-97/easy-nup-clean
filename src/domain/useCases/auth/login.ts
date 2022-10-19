type Login = {
    email: string
    password: string
}

export interface DomainLoginUseCase {
    handle: ({ email, password }: Login) => Promise<void>
}