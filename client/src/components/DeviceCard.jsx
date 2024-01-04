import React, { useContext } from "react";
import { Context } from "../main";
import "../styles/Promo.css";

function DeviceCard() {
  const { user } = useContext(Context);

  return (
    <div className="device-card">
      <img src="" alt="Device" />
    </div>
  );
}

export default DeviceCard;
