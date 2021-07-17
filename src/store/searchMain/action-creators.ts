import { ISearchMainInfo, SearchMainActions } from "../../types/searchMain";
import {
  FETCH_SEARCH_MAIN_INFO_FAILURE,
  FETCH_SEARCH_MAIN_INFO_REQUEST,
  FETCH_SEARCH_MAIN_INFO_SUCCESS,
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
