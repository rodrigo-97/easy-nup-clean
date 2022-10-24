import { DataForgotPasswordUseCase } from "@/data/useCases/auth/remoteForgotPassword";
import { makeAxiosHttpClient } from "@/main/factory/http/axiosHttpClient";
import { makePath } from "@/main/factory/http/makePath";

const url = makePath("/forget-password");
export const makeRemoteForgotPassword = () =>
  new DataForgotPasswordUseCase(makeAxiosHttpClient(), url);
