import { DataLoginUseCase } from "@/data/useCases/auth/remoteLogin";
import { makeAxiosHttpClient } from "@/main/factory/http/axiosHttpClient";
import { makePath } from "@/main/factory/http/makePath";

const url = makePath("/login");
export const makeRemoteLogin = () =>
  new DataLoginUseCase(makeAxiosHttpClient(), url);
