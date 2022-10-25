import {
  DataHttpClient,
  DataHttpVerbs,
  DataUsedHttpStatusCode,
} from "@/data/contracts/http";
import { CouldNotResetPassword } from "@/domain/errors/useCases/auth/resetPassword";
import {
  RemoteDomainResetPasswordUseCase,
  ResetPassword,
} from "@/domain/useCases/auth/resetPassword";

export class DataResetPasswordUseCase
  implements RemoteDomainResetPasswordUseCase
{
  constructor(
    private readonly httpClient: DataHttpClient,
    private readonly path: string
  ) {}

  async handle(resetPassword: ResetPassword): Promise<void> {
    const { status, data } = await this.httpClient.handle({
      data: resetPassword,
      method: DataHttpVerbs.post,
      path: this.path,
    });

    if (status === DataUsedHttpStatusCode.ok) {
      return Promise.resolve(data);
    }

    return Promise.reject(new CouldNotResetPassword());
  }
}
