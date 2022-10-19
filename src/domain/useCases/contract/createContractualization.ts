import { Contract } from "@/domain/entities/contract";

export interface DomainCreateContract {
    handle: (contract: Contract) => Promise<Contract>
}