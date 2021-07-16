import React from "react";
import { FC } from "react";
import { SearchForm } from "../../components/Form/SearchForm/SearchForm";
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
      </div>
    </div>
  );
};
