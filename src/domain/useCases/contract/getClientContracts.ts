type GetContracts = {
    page?: number;
    perPage?: number;
    search?: string;
    order?: "asc" | "desc";
    status?: string;
}

export interface DomainGetClientsContractsUseCase {
    handle(
        {
            order,
            page,
            perPage,
            search,
            status
        }: GetContracts
    ): Promise<void>
}