import { createReducer } from "typesafe-actions";
import { HelloActionType } from "../actions";
import { HelloStateType } from "../initialStates/initialStateType";
import { HelloState as initialState } from "../initialStates/initialState";
import {
  ADD_COUNT,
  DEC_COUNT,
  GET_GITHUB_PROFILE,
  GET_GITHUB_PROFILE_ERROR,
  GET_GITHUB_PROFILE_SUCCESS,
} from "../actionTypes/hello";

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
  // GET_GITHUB_PROFILE =================================================================
  [GET_GITHUB_PROFILE]: (state, action) => {
    return state;
  },
  [GET_GITHUB_PROFILE_SUCCESS]: (state, { payload: { param, result } }) => {
    let newState: HelloStateType = {
      ...state,
      githubProfile: result,
    };
    return newState;
  },
  [GET_GITHUB_PROFILE_ERROR]: (state, action) => {
    return state;
  },
});
