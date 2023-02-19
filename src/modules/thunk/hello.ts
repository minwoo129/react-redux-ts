import createAsyncThunk from ".";
import { invokeAPI } from "../../restAPI";
import { getGithubProfile } from "../actions/hello";

export const getGithubProfileThunk = createAsyncThunk(
  getGithubProfile,
  invokeAPI({ method: "get", path: "https://api.github.com/users" })
);
