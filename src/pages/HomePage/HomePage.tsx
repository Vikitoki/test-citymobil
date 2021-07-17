import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { SearchForm } from "../../components/Form/SearchForm/SearchForm";
import { SearchMenuItem } from "../../components/Search/SearchMenuItem/SearchMenuItem";
import { SearchProductItem } from "../../components/Search/SearchProductItem/SearchProductItem";
import { MainSidebar } from "../../components/Sidebars/MainSidebar/MainSidebar";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getMainSearchInfo } from "../../services/searchMainActions";
import { v4 as uuidv4 } from "uuid";

import "./HomePage.scss";

export const HomePage: FC = () => {
  // Variables
  const dispatch = useDispatch();
  const { error, loading, seachMainInfo } = useTypedSelector(
    (state) => state.searchMain
  );

  // Effects

  useEffect(() => {
    if (seachMainInfo.tariffs_list.length === 0) {
      dispatch(getMainSearchInfo());
    }
  }, [dispatch, seachMainInfo.tariffs_list.length]);

  return (
    <div className="home-page">
      <div className="home-page__sidebar">
        <MainSidebar />
      </div>
      <div className="home-page__content content-page-home">
        {loading ? (
          <span className="status-text">Загрузка данных...</span>
        ) : error ? (
          <span className="status-text">{error}</span>
        ) : (
          <>
            <div className="content-page-home__top">
              <SearchForm />
            </div>
            <div className="content-page-home__content">
              <nav className="content-page-home__menu">
                <ul className="content-page-home__menu-list">
                  {seachMainInfo.tariffs_list.length !== 0 &&
                    seachMainInfo.tariffs_list.map((item) => {
                      return (
                        <li key={uuidv4()}>
                          <SearchMenuItem info={item} />
                        </li>
                      );
                    })}
                </ul>
              </nav>
              <ul className="content-page-home__list">
                {seachMainInfo.cars.length !== 0 &&
                  seachMainInfo.cars.map((item) => {
                    return (
                      <li key={uuidv4()}>
                        <SearchProductItem info={item} />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
