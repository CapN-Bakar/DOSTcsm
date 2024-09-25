import React from "react";
import headerImg from "../assets/prototype.png";
import headerstyle from "../styles/header.module.css";

function Header() {
  return (
    <header className={headerstyle.header}>
      <img className={headerstyle.header} src={headerImg} alt="Header-Image" />
    </header>
  );
}

export default Header;
