export interface RemoteDomainLogoutUseCase {
  handle: () => Promise<void>;
}
