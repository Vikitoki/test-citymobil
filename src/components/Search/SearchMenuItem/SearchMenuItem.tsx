import React from "react";
import { FC } from "react";

import "./SearchMenuItem.scss";

interface SearchMenuItemProps {
  info: string;
}

export const SearchMenuItem: FC<SearchMenuItemProps> = ({ info }) => {
  return (
    <button type="button" className="search-menu-item">
      <span className="search-menu-item__value">{info}</span>
    </button>
  );
};
