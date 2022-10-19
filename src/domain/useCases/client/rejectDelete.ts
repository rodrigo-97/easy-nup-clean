export interface DomainRejectDelete {
  handle: (id: number) => Promise<void>;
}
