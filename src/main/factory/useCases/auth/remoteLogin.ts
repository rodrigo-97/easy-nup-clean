import { DataLoginUseCase } from "@/data/useCases/auth/remoteLogin";
import { makeAxiosHttpClient } from "../../http/axiosHttpClient";
import { makePath } from "../../http/makePath";

const url = makePath("/login");
export const makeRemoteLogin = () =>
  new DataLoginUseCase(makeAxiosHttpClient(), url);
