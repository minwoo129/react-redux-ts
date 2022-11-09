import { combineReducers } from "redux";
import hello from "./hello";

const rootReducer = combineReducers({
  hello,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
