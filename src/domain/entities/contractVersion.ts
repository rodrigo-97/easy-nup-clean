import { Contract } from "./contract";

export type ContractVersion = {
  id: number;
  contractId: number;
  serializedContract: string;
  requestedContractSerialized: string;
  rejectedAt: Date;
  acceptedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  contract: Contract;
};
