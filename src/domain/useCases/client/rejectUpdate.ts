type RejectUpdate = {
  clientId: string;
  companyId: string;
  contractId: number;
};

export interface DomainRejectUpdate {
  handle: (rejectUpdate: RejectUpdate) => Promise<void>;
}
