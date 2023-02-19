import { createAsyncAction } from "typesafe-actions";
import { AxiosError, AxiosResponse } from "axios";
import {
  ADD_COUNT,
  DEC_COUNT,
  GET_GITHUB_PROFILE,
  GET_GITHUB_PROFILE_ERROR,
  GET_GITHUB_PROFILE_SUCCESS,
} from "../actionTypes/hello";

export const addCount = (value: number) => {
  return { type: ADD_COUNT, payload: value };
};

export const decCount = (value: number) => {
  return { type: DEC_COUNT, payload: value };
};

export const getGithubProfile = createAsyncAction(
  GET_GITHUB_PROFILE,
  GET_GITHUB_PROFILE_SUCCESS,
  GET_GITHUB_PROFILE_ERROR
)<any, AxiosResponse<any, any>, AxiosError>();
