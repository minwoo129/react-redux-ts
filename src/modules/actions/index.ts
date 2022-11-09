import { ActionType } from "typesafe-actions";
import { addCount, decCount } from "./hello";

export type HelloActionType =
  | ActionType<typeof addCount>
  | ActionType<typeof decCount>;
