import { Contract } from "./contract"
import { Param } from "./param"

export type ServiceType = {
    id: number
    name: string
    contractId: number
    createdAt: Date
    updatedAt: Date
    contract: Contract
    params: Param
}