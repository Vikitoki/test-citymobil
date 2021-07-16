import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <Link to="/" className="header__link">
                To the home page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
