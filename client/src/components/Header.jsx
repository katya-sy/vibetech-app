import React, { useContext } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img/logo.svg";
import search from "../assets/img/search.svg";
import favourite from "../assets/img/favourite.svg";
import cart from "../assets/img/cart.svg";
import userIcon from "../assets/img/user.svg";
import { CATEGORIES_ROUTE } from "../utils/consts";

function Header() {
  const { user } = useContext(Context);

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <picture className="header__logo">
            <img src={logo} alt="Logo" />
          </picture>
          <div className="header__nav">
            <Link to={CATEGORIES_ROUTE}>Категории</Link>
            <a href="#">Обратная связь</a>
            <a href="#">Контакты</a>
          </div>
          <div className="header__icons">
            <img src={search} />
            {user.isAuth && (
              <div>
                <img src={cart} />
                <img src={favourite} />
              </div>
            )}
            <img src={userIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
