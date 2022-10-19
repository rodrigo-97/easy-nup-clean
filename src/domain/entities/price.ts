import { Contract } from "./contract";

export type Price = {
  id: number;
  pf: number | null;
  ust: number | null;
  hh: number | null;
  pfReajustPercentage: number;
  ustReajustPercentage: number;
  hhReajustPercentage: number;
  isFromReajust: boolean;
  isFromRenegotiation: boolean;
  contractId: number;
  createdAt: Date;
  updatedAt: Date;
  contract: Contract;
};
