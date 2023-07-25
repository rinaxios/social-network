import React from "react";
import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
        alt=""
      />
    </header>
  );
};

export default Header;