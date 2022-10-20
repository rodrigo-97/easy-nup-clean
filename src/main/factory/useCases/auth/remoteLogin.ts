import { DataLoginUseCase } from "@/data/useCases/auth/remoteLogin";
import { makeAxiosHttpClient } from "../../http/axiosHttpClient";

export const makeRemoteLogin = () =>
  new DataLoginUseCase(makeAxiosHttpClient());
