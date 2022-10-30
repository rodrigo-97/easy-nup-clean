import {
  DataHttpClient,
  DataHttpVerbs,
  DataUsedHttpStatusCode,
} from "@/data/contracts/http";
import { CouldNotForgetPassword } from "@/domain/errors/useCases/auth/forgotPassword";
import {
  DomainLoginResponse,
  Login,
  RemoteDomainLoginUseCase,
} from "@/domain/useCases/auth/login";

export class DataLoginUseCase implements RemoteDomainLoginUseCase {
  constructor(
    private readonly httpClient: DataHttpClient,
    private readonly path: string
  ) { }

  async handle(login: Login): Promise<DomainLoginResponse> {
    const { status, data } = await this.httpClient.handle({
      data: login,
      method: DataHttpVerbs.post,
      path: this.path,
    });

    if (status === DataUsedHttpStatusCode.ok) {
      return Promise.resolve(data);
    }

    return Promise.reject(new CouldNotForgetPassword());
  }
}
