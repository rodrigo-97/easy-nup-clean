import { ContractStatus } from "../enums/contractStatus"
import { Client } from "./client"
import { Company } from "./company"
import { ContractVersion } from "./contractVersion"
import { Price } from "./price"
import { ServiceType } from "./serviceType"

export type Contract = {
    id: number
    name: string
    effectiveDate: Date
    finishDate: Date
    status: ContractStatus
    predictedVolumeFunctionPoint: number
    clientId: number
    contractNumber?: string | null
    biddingNumber?: string | null
    hasChangeRequest: boolean
    hasDeleteRequest: boolean
    companyId: number
    deletedAt: Date
    createdAt: Date
    updatedAt: Date
    serviceTypes: ServiceType[]
    versions: ContractVersion[]
    prices: Price[]
    client: Client
    company: Company
}