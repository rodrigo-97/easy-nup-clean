import { Contract } from "@/domain/entities/contract";

type UpdateContract = {
  contract: Contract;
  id: number;
};

export interface DomainUpdateContract {
  handle: (updateContract: UpdateContract) => Promise<Contract>;
}
