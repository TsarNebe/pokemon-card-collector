import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/collection">Коллекция</Link></li>
        <li><Link to="/trade">Обмен</Link></li>
        <li><Link to="/auction">Аукцион</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
