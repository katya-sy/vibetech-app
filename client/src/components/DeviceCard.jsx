import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Promo.css";
import fav from "../assets/img/add-fav.svg";
import cart from "../assets/img/add-cart.svg";
import "../styles/DeviceCard.css";
import { DEVICE_ROUTE } from "../utils/consts";

function DeviceCard({ device }) {
  const router = useNavigate();

  return (
    <div className="device-card">
      <div onClick={() => router(`${DEVICE_ROUTE}/${device.id}`)}>
        <picture>
          <img className="device-card__img" src={device.img[0]} alt="Device" />
        </picture>
        <h4 className="device-card__title">{device.name}</h4>
      </div>
      <div>
        <p className="device-card__price">{device.price + " ₽"}</p>
        <div className="device-card__btns">
          <button
            onClick={(e) =>
              e.target.classList.toggle("device-card__btn-active")
            }
          >
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
