import { DataCreateAccountUseCase } from "@/data/useCases/auth/remoteCreateAccount";
import { makeAxiosHttpClient } from "@/main/factory/http/axiosHttpClient";
import { makePath } from "@/main/factory/http/makePath";

const url = makePath("/create-account");
export const makeRemoteCreateAccount = () =>
  new DataCreateAccountUseCase(makeAxiosHttpClient(), url);
