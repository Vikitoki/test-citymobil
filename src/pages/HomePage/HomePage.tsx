import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { SearchForm } from "../../components/Search/SearchForm/SearchForm";
import { SearchMenuItem } from "../../components/Search/SearchMenuItem/SearchMenuItem";
import { SearchProductItem } from "../../components/Search/SearchProductItem/SearchProductItem";
import { MainSidebar } from "../../components/Sidebars/MainSidebar/MainSidebar";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getMainSearchInfo } from "../../services/rest/searchMainActions";
import { v4 as uuidv4 } from "uuid";

import "./HomePage.scss";
import { useState } from "react";
import {
  searchFilterByAllOptions,
  searchFilterByTarrifs,
} from "../../services/helpers/searchFilterByAcions";
import { ISearchMainInfoCarItem } from "../../types/searchMain";

export const HomePage: FC = () => {
  // Variables
  const dispatch = useDispatch();
  const { error, loading, seachMainInfo } = useTypedSelector(
    (state) => state.searchMain
  );
  const [activeMenuItem, setActiveMenuItem] = useState<number>();
  const [visibleProductItems, setVisibleProductItems] = useState<
    ISearchMainInfoCarItem[]
  >(seachMainInfo.cars);
  const [visibleFilteredProductItem, setVisibleFilteredProductItem] = useState<
    ISearchMainInfoCarItem[]
  >([]);


  // Effects

  useEffect(() => {
    if (seachMainInfo.tariffs_list.length === 0) {
      dispatch(getMainSearchInfo());
    }
  }, [dispatch, seachMainInfo.tariffs_list.length]);

  useEffect(() => {
    setVisibleProductItems(seachMainInfo.cars);
  }, [seachMainInfo.cars]);

  // Handlers

  const setActiveMenuItemHandler = (index: number, info: string) => {
    setActiveMenuItem(index);
    setVisibleProductItems(searchFilterByTarrifs(seachMainInfo.cars, info));
  };

  const submitSearchFormHandler = (value: string) => {
    if (value.trim() !== "") {
      setVisibleFilteredProductItem(
        searchFilterByAllOptions(visibleProductItems, value)
      );
    } else {
      setVisibleFilteredProductItem([]);
    }
  };

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
              <SearchForm submitAction={submitSearchFormHandler} />
            </div>
            <div className="content-page-home__content">
              <nav className="content-page-home__menu">
                <ul className="content-page-home__menu-list">
                  {seachMainInfo.tariffs_list.length !== 0 &&
                    seachMainInfo.tariffs_list.map((item, index) => {
                      return (
                        <li key={uuidv4()}>
                          <SearchMenuItem
                            info={item}
                            index={index}
                            activeStatus={activeMenuItem === index}
                            setActiveStatus={setActiveMenuItemHandler}
                          />
                        </li>
                      );
                    })}
                </ul>
              </nav>
              <ul className="content-page-home__list">
                {visibleProductItems.length !== 0 &&
                  visibleFilteredProductItem.length === 0 &&
                  visibleProductItems.map((item) => {
                    return (
                      <li key={uuidv4()}>
                        <SearchProductItem info={item} />
                      </li>
                    );
                  })}
                {visibleFilteredProductItem.length !== 0 &&
                  visibleFilteredProductItem.map((item) => {
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
