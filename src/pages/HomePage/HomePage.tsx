import React from "react";
import { FC } from "react";
import { SearchForm } from "../../components/Form/SearchForm/SearchForm";
import { SearchMenuItem } from "../../components/Search/SearchMenuItem/SearchMenuItem";
import { SearchProductItem } from "../../components/Search/SearchProductItem/SearchProductItem";
import { MainSidebar } from "../../components/Sidebars/MainSidebar/MainSidebar";

import "./HomePage.scss";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__sidebar">
        <MainSidebar />
      </div>
      <div className="home-page__content content-page-home">
        <div className="content-page-home__top">
          <SearchForm />
        </div>
        <div className="content-page-home__content">
          <nav className="content-page-home__menu">
            <ul className="content-page-home__menu-list">
              <li>
                <SearchMenuItem />
              </li>
            </ul>
          </nav>
          <ul className="content-page-home__list">
            <li>
              <SearchProductItem />
            </li>
          </ul>
          <span className="content-page-home__selected"></span>
        </div>
      </div>
    </div>
  );
};
