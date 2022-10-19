export interface DomainLogoutUseCase {
    handle: () => Promise<void>
}