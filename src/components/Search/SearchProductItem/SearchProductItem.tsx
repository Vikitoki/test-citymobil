import React from "react";
import { FC } from "react";
import { ISearchMainInfoCarItem } from "../../../types/searchMain";
import { v4 as uuidv4 } from "uuid";

import "./SearchProductItem.scss";
import { useDispatch } from "react-redux";
import { getSelectSearchItem } from "../../../services/rest/searchMainActions";

interface SearchProductItemProps {
  info: ISearchMainInfoCarItem;
}

export const SearchProductItem: FC<SearchProductItemProps> = ({ info }) => {
  // Variables
  const dispatch = useDispatch();
  const { mark, model, tariffs } = info;

  // Handlers

  const searchProductButtonHandler = (year: string) => {
    const resultValue = `Выбран автомобиль ${mark} ${model} ${year} года выпуска`;
    dispatch(getSelectSearchItem(resultValue));
  };

  return (
    <div className="search-product-item">
      <div className="search-product-item__list">
        <div className="search-product-item__list-value search-product-item__list-value_not-allowed search-product-item__list-value_first">
          <span className="search-product-item__text">{`${mark} ${model}`}</span>
        </div>

        {Object.values(tariffs)
          .sort((a, b) => (a.year > b.year ? 1 : -1))
          .map((item) => {
            return (
              <button
                onClick={() => searchProductButtonHandler(item.year)}
                type="button"
                key={uuidv4()}
                className="search-product-item__list-value"
              >
                <span className="search-product-item__text">{item.year}</span>
              </button>
            );
          })}

        {Object.values(tariffs).length < 6
          ? Array(6 - Object.values(tariffs).length)
              .fill("-")
              .map((item) => {
                return (
                  <div
                    key={uuidv4()}
                    className="search-product-item__list-value search-product-item__list-value_not-allowed"
                  >
                    <span className="search-product-item__text">{item}</span>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};
