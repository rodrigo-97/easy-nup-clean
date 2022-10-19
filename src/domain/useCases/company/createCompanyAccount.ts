import { Company } from "@/domain/entities/company";

export interface DomainCreateCompanyAccount {
  handle: (company: Company) => Promise<Company>;
}
