import { InfraAxiosHttpClient } from "@/infra/http/axiosClient";

export const makeAxiosHttpClient = <T>() => new InfraAxiosHttpClient<T>();
