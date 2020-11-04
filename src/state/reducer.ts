import { handleActions } from "redux-actions";
import {
  SAVE_VIDEOS,
  SET_LOADING,
  SET_SEARCH_BY,
  SET_SEARCH_VALUE,
} from "./action-types";
import { ITutorials } from "./types";

export const defaultState: ITutorials = {
  loading: false,
  videos: [],

  searchBy: "",
  searchValue: "",
};

// @ts-ignore
export default handleActions(
  {
    [SAVE_VIDEOS]: (state, { payload }) => ({ ...state, videos: payload }),
    [SET_LOADING]: (state, { payload }) => ({ ...state, loading: payload }),
    [SET_SEARCH_VALUE]: (state, { payload }) => ({
      ...state,
      searchValue: payload,
    }),
    [SET_SEARCH_BY]: (state, { payload }) => ({ ...state, searchBy: payload }),
  },
  defaultState
);
