import { Company } from "./company";
import { Contract } from "./contract";
import { User } from "./user";

export type Client = {
  id: number;
  userId: number;
  companyId: number | null;
  createdAt: Date;
  updatedAt: Date;
  company: Company[];
  contracts: Contract[];
  user: User;
};
