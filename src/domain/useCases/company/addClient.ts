export interface DomainAddClientUseCase {
  handle: (email: string) => Promise<void>;
}
