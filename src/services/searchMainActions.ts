import { Dispatch } from "react";
import {
  fetchSearchMainInfoFailure,
  fetchSearchMainInfoRequest,
  fetchSearchMainInfoSuccess,
  selectSearchItem,
} from "../store/searchMain/action-creators";
import { ISearchMainInfo, SearchMainActions } from "../types/searchMain";

const ERROR_MESSAGE = "Что-то пошло не так, повторите попытку через 5 секунд!";

export const getMainSearchInfo = () => {
  return async (dispatch: Dispatch<SearchMainActions>) => {
    try {
      dispatch(fetchSearchMainInfoRequest());

      const response = await fetch("https://city-mobil.ru/api/cars");

      if (!response.ok) {
        throw new Error(`${ERROR_MESSAGE}`);
      }

      const data: ISearchMainInfo = await response.json();
      dispatch(fetchSearchMainInfoSuccess(data));
    } catch (error) {
      dispatch(fetchSearchMainInfoFailure(ERROR_MESSAGE));
    }
  };
};

export const getSelectSearchItem = (info: string) => {
  return async (disptach: Dispatch<SearchMainActions>) => {
    disptach(selectSearchItem(info));
  };
};
