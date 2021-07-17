import { ISearchMainInfo, SearchMainActions } from "../../types/searchMain";
import {
  FETCH_SEARCH_MAIN_INFO_FAILURE,
  FETCH_SEARCH_MAIN_INFO_REQUEST,
  FETCH_SEARCH_MAIN_INFO_SUCCESS,
  SELECT_SEARCH_ITEM,
} from "./action-variables";

export const fetchSearchMainInfoFailure = (
  payload: string
): SearchMainActions => ({
  type: FETCH_SEARCH_MAIN_INFO_FAILURE,
  payload: payload,
});

export const fetchSearchMainInfoSuccess = (
  payload: ISearchMainInfo
): SearchMainActions => ({
  type: FETCH_SEARCH_MAIN_INFO_SUCCESS,
  payload,
});

export const fetchSearchMainInfoRequest = (): SearchMainActions => ({
  type: FETCH_SEARCH_MAIN_INFO_REQUEST,
});

export const selectSearchItem = (payload: string): SearchMainActions => ({
  type: SELECT_SEARCH_ITEM,
  payload,
});
