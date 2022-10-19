export type Pagination = {
  page?: number;
  perPage?: number;
  search?: string;
  order?: "asc" | "desc";
  status?: string;
};

export interface DomainGetClientsContractsUseCase {
  handle(pagination: Pagination): Promise<void>;
}
