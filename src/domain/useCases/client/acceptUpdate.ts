type AcceptUpdate = {
  clientId: string;
  companyId: string;
  contractId: number;
};

export interface DomainAcceptUpdate {
  handle: (acceptUpdate: AcceptUpdate) => Promise<void>;
}
