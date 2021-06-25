import React from "react";
import "../styles/banner.css";
import logo from "../assets/logo.png";

const Header = () => {
  const title = "La maison jungle";

  return (
    <div className="imj-banner">
      <img src={logo} alt="La maison jungle" className="imj-logo"></img>
      <h1 className="imj-title">{title}</h1>
    </div>
  );
};

export default Header;
