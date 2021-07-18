import React from "react";
import { FC } from "react";

import "./SearchMenuItem.scss";

interface SearchMenuItemProps {
  info: string;
  index: number;
  activeStatus: boolean;
  setActiveStatus: (index: number, info: string) => void;
}

export const SearchMenuItem: FC<SearchMenuItemProps> = ({
  info,
  activeStatus,
  index,
  setActiveStatus,
}) => {
  return (
    <button
      onClick={() => setActiveStatus(index, info)}
      type="button"
      className={`search-menu-item ${
        activeStatus && "search-menu-item_active"
      }`}
    >
      <span className="search-menu-item__value">{info}</span>
    </button>
  );
};
