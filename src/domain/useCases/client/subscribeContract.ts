type SubscribreContract = {
  type: "NOT_SUBSCRIBE" | "SUBSCRIBE";
  clientId: number;
  companyId: number;
  contractId: number;
};

export interface DomainSubscribeContract {
  handle: (subscribreContract: SubscribreContract) => Promise<void>;
}
