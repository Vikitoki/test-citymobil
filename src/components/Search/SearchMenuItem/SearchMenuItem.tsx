import React from "react";
import { FC } from "react";

import "./SearchMenuItem.scss";

export const SearchMenuItem: FC = () => {
  return (
    <button type="button" className="search-menu-item">
      <span className="search-menu-item__value">2002</span>
    </button>
  );
};
