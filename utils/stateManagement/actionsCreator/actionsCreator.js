import { SET_FILTER_TYPE, SET_FILTER_DATA } from "../actions";

export const setFilterType = (data) => ({
  type: SET_FILTER_TYPE,
  payload: { data },
});

export const setFilterData = (data) => ({
  type: SET_FILTER_DATA,
  payload: { data },
});
