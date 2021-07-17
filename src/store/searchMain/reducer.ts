import { SearchMainActions, SearchMainState } from "../../types/searchMain";
import {
  FETCH_SEARCH_MAIN_INFO_FAILURE,
  FETCH_SEARCH_MAIN_INFO_REQUEST,
  FETCH_SEARCH_MAIN_INFO_SUCCESS,
} from "./action-variables";

const initialState: SearchMainState = {
  seachMainInfo: {
    tariffs_list: [],
    cars: [],
  },
  error: "",
  loading: false,
};

export const searchMainReducer = (
  state = initialState,
  action: SearchMainActions
): SearchMainState => {
  switch (action.type) {
    case FETCH_SEARCH_MAIN_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SEARCH_MAIN_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        seachMainInfo: action.payload,
      };
    case FETCH_SEARCH_MAIN_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
