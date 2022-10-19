export interface DomainDeleteContractUseCase {
  handle: (id: number) => Promise<void>;
}
