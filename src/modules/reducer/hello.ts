import { createReducer } from "typesafe-actions";
import { HelloActionType } from "../actions";
import { HelloStateType } from "../initialStates/initialStateType";
import { HelloState as initialState } from "../initialStates/initialState";
import { ADD_COUNT, DEC_COUNT } from "../actionTypes/hello";

export default createReducer<HelloStateType, HelloActionType>(initialState, {
  [ADD_COUNT]: (state, action) => {
    const newState: HelloStateType = {
      ...state,
      count: state.count + action.payload,
    };

    return newState;
  },
  [DEC_COUNT]: (state, action) => {
    const newState: HelloStateType = {
      ...state,
      count: state.count - action.payload,
    };

    return newState;
  },
});
