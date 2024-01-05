import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img/logo.svg";
import search from "../assets/img/search.svg";
import favourite from "../assets/img/favourite.svg";
import cart from "../assets/img/cart.svg";
import userIcon from "../assets/img/user.svg";
import { CATEGORIES_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const Header = observer(({ openModal }) => {
  const { user } = useContext(Context);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to={SHOP_ROUTE} className="header__logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="header__nav">
            <Link to={CATEGORIES_ROUTE}>Категории</Link>
            <a href="#feedback">Обратная связь</a>
            <a href="#contacts">Контакты</a>
          </div>
          {user.isAuth ? (
            <div className="header__icons">
              <Link to={CATEGORIES_ROUTE}>
                <img src={search} />
              </Link>
              <button>
                <img src={cart} />
              </button>
              <button>
                <img src={favourite} />
              </button>
              <button>
                <img src={userIcon} />
              </button>
            </div>
          ) : (
            <div className="header__icons">
              <Link to={CATEGORIES_ROUTE}>
                <img src={search} />
              </Link>
              <button onClick={openModal}>
                <img src={userIcon} />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
