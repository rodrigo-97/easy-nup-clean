import {
  DataHttpClient,
  DataRequest,
  DataResponse,
} from "@/data/contracts/http";
import { Axios } from "./axiosConfig";

export class InfraAxiosHttpClient<T> implements DataHttpClient<T> {
  async handle(request: DataRequest<T>): Promise<DataResponse<T>> {
    try {
      const response = await Axios({
        method: request.method,
        data: request.data,
        url: request.path,
      });

      const responseData: DataResponse<T> = {
        data: response.data,
        status: response.status,
      };

      return responseData;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
