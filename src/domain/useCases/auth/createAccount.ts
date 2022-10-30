import { CreateUser } from "@/domain/entities/createUser";

export interface RemoteDomainCreateAccountUseCase {
  handle: (user: CreateUser) => Promise<void>;
}
