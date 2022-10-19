import { Contract } from "@/domain/entities/contract";
import { Pagination } from "../contract/getClientContracts";

export interface DomainGetContracts {
  handle: (pagination: Pagination) => Promise<Contract[]>;
}
