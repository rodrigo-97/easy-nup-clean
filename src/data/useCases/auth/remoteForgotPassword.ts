import {
  DataHttpClient,
  DataHttpVerbs,
  DataUsedHttpStatusCode,
} from "@/data/contracts/http";
import { CouldNotForgetPassword } from "@/domain/errors/useCases/auth/forgotPassword";
import { RemoteDomainForgotPasswordUseCase } from "@/domain/useCases/auth/forgotPassword";

export class DataForgotPasswordUseCase
  implements RemoteDomainForgotPasswordUseCase
{
  constructor(
    private readonly httpClient: DataHttpClient,
    private readonly path: string
  ) {}

  async handle(email: string): Promise<void> {
    const { status, data } = await this.httpClient.handle({
      data: { email },
      method: DataHttpVerbs.post,
      path: this.path,
    });

    if (status === DataUsedHttpStatusCode.ok) {
      return Promise.resolve(data);
    }

    return Promise.reject(new CouldNotForgetPassword());
  }
}
