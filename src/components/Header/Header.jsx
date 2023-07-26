import React from "react";
import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://thumb.tildacdn.com/tild3934-3234-4966-b864-383366373736/-/format/webp/vk.png"
        alt=""
      />
    </header>
  );
};

export default Header;