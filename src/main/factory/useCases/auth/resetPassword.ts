import { DataResetPasswordUseCase } from "@/data/useCases/auth/remoteResetPassword";
import { makeAxiosHttpClient } from "@/main/factory/http/axiosHttpClient";
import { makePath } from "@/main/factory/http/makePath";

const url = makePath("/reset-password");
export const makeRemoteResetPassword = () =>
  new DataResetPasswordUseCase(makeAxiosHttpClient(), url);
