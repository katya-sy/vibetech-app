import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";
import DeviceCard from "./DeviceCard";
import "../styles/DeviceList.css";

const DeviceList = observer(({ deviceCount }) => {
  const { device } = useContext(Context);

  return (
    <div className="device-list">
      {device.devices.slice(0, deviceCount).map((device) => (
        <DeviceCard
          key={device.id}
          name={device.name}
          img={device.img}
          price={device.price}
        />
      ))}
    </div>
  );
});

export default DeviceList;
