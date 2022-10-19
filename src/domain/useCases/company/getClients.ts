import { Client } from "@/domain/entities/client";
import { Pagination } from "../contract/getClientContracts";

export interface DomainGetClients {
  handle: (pagination: Pagination) => Promise<Client[]>;
}
