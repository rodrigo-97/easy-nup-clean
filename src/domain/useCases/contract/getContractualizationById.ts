import { Contract } from "@/domain/entities/contract";

export interface DomainGetContractById {
  handle: (id: number) => Promise<Contract>;
}
