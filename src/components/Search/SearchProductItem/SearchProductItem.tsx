import React from "react";
import { FC } from "react";

import "./SearchProductItem.scss";

export const SearchProductItem: FC = () => {
  return (
    <button type="button" className="search-product-item">
      <div className="search-product-item__list">
        <div className="search-product-item__list-value search-product-item__list-value_first">
          <span className="search-product-item__text">{2022}</span>
        </div>
        <div className="search-product-item__list-value search-product-item__list-value_first">
          <span className="search-product-item__text">{2022}</span>
        </div>
        <div className="search-product-item__list-value search-product-item__list-value_first">
          <span className="search-product-item__text">{2022}</span>
        </div>
      </div>
    </button>
  );
};
