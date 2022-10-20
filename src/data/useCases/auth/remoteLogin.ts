import {
  DataHttpClient,
  DataHttpVerbs,
  DataUsedHttpStatusCode,
} from "@/data/contracts/http";
import { CouldNotLogin } from "@/domain/errors/useCases/auth/login";
import { RemoteDomainLoginUseCase, Login } from "@/domain/useCases/auth/login";

export class DataLoginUseCase implements RemoteDomainLoginUseCase {
  constructor(private readonly httpClient: DataHttpClient) {}

  async handle(login: Login): Promise<void> {
    const { status } = await this.httpClient.handle({
      data: login,
      method: DataHttpVerbs.post,
      path: "/login",
    });

    if (status === DataUsedHttpStatusCode.ok) {
      return Promise.resolve();
    }

    return Promise.reject(new CouldNotLogin());
  }
}
