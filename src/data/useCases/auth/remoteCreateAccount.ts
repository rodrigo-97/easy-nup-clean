import {
  DataHttpClient,
  DataHttpVerbs,
  DataUsedHttpStatusCode,
} from "@/data/contracts/http";
import { CreateUser } from "@/domain/entities/createUser";
import { CouldNotCreateAccount } from "@/domain/errors/useCases/auth/createAccount";
import { RemoteDomainCreateAccountUseCase } from "@/domain/useCases/auth/createAccount";

export class DataCreateAccountUseCase
  implements RemoteDomainCreateAccountUseCase {
  constructor(
    private readonly httpClient: DataHttpClient,
    private readonly path: string
  ) { }

  async handle(user: CreateUser): Promise<void> {
    const { status, data } = await this.httpClient.handle({
      data: user,
      method: DataHttpVerbs.post,
      path: this.path,
    });

    if (status === DataUsedHttpStatusCode.ok) {
      return Promise.resolve(data);
    }

    return Promise.reject(new CouldNotCreateAccount());
  }
}
