import { Dispatch } from "redux";
import { createAction } from "redux-actions";
import { request } from "../utils/request";
import {
  SAVE_VIDEOS,
  SET_LOADING,
  SET_SEARCH_BY,
  SET_SEARCH_VALUE,
} from "./action-types";

export const saveVideos = createAction(SAVE_VIDEOS);
export const setLoading = createAction(SET_LOADING);
export const setSearchBy = createAction(SET_SEARCH_BY);
export const setSearchValue = createAction(SET_SEARCH_VALUE);

export const fetchVideos = (requestFn = request) => async (
  dispatch: Dispatch
): Promise<any> => {
  try {
    // set loading to true
    dispatch(setLoading(true));

    const videos = await requestFn(
      "https://lingumi-take-home-test-server.herokuapp.com/videoTutorials"
    );

    // save the data
    dispatch(saveVideos(videos));

    return videos;
  } catch (error) {
    console.log(error);
    return Error(error);
  } finally {
    dispatch(setLoading(false));
  }
};
