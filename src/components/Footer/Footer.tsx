import React from "react";
import { FC } from "react";

import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <p>
            Copy right Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </footer>
  );
};
