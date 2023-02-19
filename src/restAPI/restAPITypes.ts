import { AxiosResponse } from "axios";

export type invokeAPIType = (
  args1: apiType1
) => (args2: apiType2) => Promise<AxiosResponse<any, any>>;
export type APIMETHOD = "get" | "post" | "put" | "patch" | "delete";
export type apiType1 = {
  method: APIMETHOD;
  path: string;
};

export type apiType2 = {
  subPath?: string | null;
  params?: any;
  data?: any;
};
