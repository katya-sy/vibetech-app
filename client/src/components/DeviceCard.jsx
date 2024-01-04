import React, { useContext } from "react";
import "../styles/Promo.css";
import fav from "../assets/img/add-fav.svg";
import cart from "../assets/img/add-cart.svg";
import "../styles/DeviceCard.css";

function DeviceCard({ img, name, price }) {
  return (
    <div className="device-card">
      <img src={img[0]} alt="Device" />
      <h4 className="device-card__title">{name}</h4>
      <div>
        <p className="device-card__price">{price + " ₽"}</p>
        <div className="device-card__btns">
          <button>
            <img src={fav} />
          </button>
          <button>
            <img src={cart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;
