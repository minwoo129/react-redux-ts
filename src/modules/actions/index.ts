import { ActionType } from "typesafe-actions";
import { addCount, decCount, getGithubProfile } from "./hello";

export type HelloActionType =
  | ActionType<typeof addCount>
  | ActionType<typeof decCount>
  | ActionType<typeof getGithubProfile>;
