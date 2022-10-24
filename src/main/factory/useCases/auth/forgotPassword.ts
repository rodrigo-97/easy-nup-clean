import { DataForgotPasswordUseCase } from "@/data/useCases/auth/remoteForgotPassword";
import { makeAxiosHttpClient } from "../../http/axiosHttpClient";
import { makePath } from "../../http/makePath";

const url = makePath("/forget-password");
export const makeRemoteForgotPassword = () =>
  new DataForgotPasswordUseCase(makeAxiosHttpClient(), url);
