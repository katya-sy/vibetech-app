import React from "react";
import Button from "./UI/button/Button.jsx";
import heart from "../assets/img/heart.svg";
import "../styles/DeviceMain.css";

function DeviceMain() {
  const device = {
    id: 1,
    name: "Sumsung A20",
    price: 30000,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: [
      "https://c.dns-shop.ru/thumb/st4/fit/320/250/4e4e2dde43b93f00fadf7469170939a3/5563fc08ad6cc591c2fcb652c354e31efed782350452a3573fb83a3846af35fd.jpg",
      "https://c.dns-shop.ru/thumb/st1/fit/320/250/3564920f3bd4276b5731f9aa4766d118/0ccac1c4f7508fce521881ae2788ec7f737241c7dfedb2f196253eed7061ec60.jpg",
      "https://i.pinimg.com/236x/23/b9/e8/23b9e86b29aecf76cc46575303487018.jpg",
    ],
  };
  const description = [
    { id: 1, title: "Country", desc: "China" },
    { id: 2, title: "Color", desc: "White" },
    { id: 3, title: "Type", desc: "Vacuum cleaner" },
  ];

  return (
    <div className="device-main">
      <div className="device-main__content">
        <div className="device-main__images">
          {device.img.map((img) => (
            <img key={img} src={img} alt="Device" />
          ))}
        </div>
        <div className="device-main__content-info">
          <div>
            <h2 className="device-main__title">{device.name}</h2>
            <p className="device-main__desc">{device.desc}</p>
            <p className="device-main__price">{device.price} ₽</p>
          </div>
          <div className="device-main__btns">
            <Button style={{ width: "50%" }}>Купить</Button>
            <button>
              <img src={heart} />
            </button>
          </div>
        </div>
      </div>
      <div className="device-main__info">
        <h2 className="device-main__title">Характеристики</h2>
        <div className="device-main__info-wrapper">
          {description.map((desc) => (
            <div key={desc.id} className="device-main__info-item">
              <h4>{desc.title}</h4>
              <p>{desc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeviceMain;
