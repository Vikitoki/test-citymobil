import {
  FETCH_SEARCH_MAIN_INFO_FAILURE,
  FETCH_SEARCH_MAIN_INFO_REQUEST,
  FETCH_SEARCH_MAIN_INFO_SUCCESS,
} from "../store/searchMain/action-variables";

export interface ISearchMainInfoCarItem {
  mark: string;
  model: string;
  tariffs: {
    [key: string]: {
      year: string;
    };
  };
}

export interface ISearchMainInfo {
  tariffs_list: string[];
  cars: ISearchMainInfoCarItem[];
}

export interface SearchMainState {
  seachMainInfo: ISearchMainInfo;
  loading: boolean;
  error: string;
}

interface FetchSearchMainInfoRequestAction {
  type: typeof FETCH_SEARCH_MAIN_INFO_REQUEST;
}

interface FetchSearchMainInfoSuccessAction {
  type: typeof FETCH_SEARCH_MAIN_INFO_SUCCESS;
  payload: ISearchMainInfo;
}

interface FetchSearchMainInfoFailureAction {
  type: typeof FETCH_SEARCH_MAIN_INFO_FAILURE;
  payload: string;
}

export type SearchMainActions =
  | FetchSearchMainInfoRequestAction
  | FetchSearchMainInfoSuccessAction
  | FetchSearchMainInfoFailureAction;
