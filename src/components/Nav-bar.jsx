import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "../styles/nav-bar.css";

const NavBar = () => {
  const menu = [".Home", ".Why?", ".Projects", ".Contact"];
  const item = menu.map((arr) => (
    <li key={arr.toString()}>
      <a href={"#" + arr}></a>
      {arr}
    </li>
  ));
  return (
    <div className="navbar">
      <nav
        className="nav sticky
      -top"
      >
        <span id="brand" className="animate__bounceIn">
          <a href="#Home">Explore Creative</a>
        </span>
        <ul id="menu">{item}</ul>

        <div id="toggle">
          <div className="span">Menu</div>
        </div>
      </nav>

      <div id="resize">
        <div className="close-btn">Close</div>

        <ul id="menu">{item}</ul>
      </div>
    </div>
  );
};

export default NavBar;
