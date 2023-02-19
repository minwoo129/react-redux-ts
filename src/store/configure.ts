import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../modules/reducer";

const configure = () => {
  return createStore(reducer, applyMiddleware(createLogger(), thunk));
};

export default configure;
