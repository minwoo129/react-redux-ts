import axios, { AxiosRequestConfig } from "axios";
import { invokeAPIType } from "./restAPITypes";

export const invokeAPI: invokeAPIType =
  ({ method, path }) =>
  ({ subPath = null, params = null, data = null }) => {
    let axiosReq: AxiosRequestConfig = {
      method,
      url: subPath ? `${path}${subPath}` : path,
      params,
      data,
    };

    return axios(axiosReq);
  };
