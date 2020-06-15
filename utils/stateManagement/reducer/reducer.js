import model from "../model";
import { SET_FILTER_TYPE, SET_FILTER_DATA } from "../actions";

export const reducer = (state = model, action = {}) => {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return { ...state, filterType: action.payload.data };
    case SET_FILTER_DATA:
      return {
        data: [action.payload.data],
      };
    default:
      return state;
  }
};
