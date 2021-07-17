import React from "react";
import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import "./MainSidebar.scss";

export const MainSidebar: FC = () => {
  const { selectSearchItem } = useTypedSelector((state) => state.searchMain);

  return (
    <aside className="main-sidebar">
      <div className="main-sidebar__info">
        <span>
          Поскольку таблица автомобилей слишком большая, то здесь будет
          отображена информация о выбранном автомобиле:{" "}
        </span>
        {selectSearchItem && <p>{selectSearchItem}</p>}
      </div>
    </aside>
  );
};
