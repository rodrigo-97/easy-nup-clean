import { Client } from "@/domain/entities/client";

export interface DomainCreateAccount {
  handle: (client: Client) => Promise<Client>;
}
