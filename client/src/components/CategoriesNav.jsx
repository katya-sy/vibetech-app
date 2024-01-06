import React, { useContext, useRef } from "react";
import { Context } from "../main";
import "../styles/CategoriesNav.css";
import { observer } from "mobx-react-lite";
import close from "../assets/img/close.svg";

const CategoriesNav = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="categories-nav">
      <img src={close} className="close-icon" />
      <ul>
        {device.types.map((type) => (
          <li
            key={type.id}
            onClick={() => {
              device.setSelectedType(type);
            }}
          >
            <img src={type.img} />
            <span>{type.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CategoriesNav;
