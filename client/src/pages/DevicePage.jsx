import React from "react";
import DeviceMain from "../components/DeviceMain";
import { observer } from "mobx-react-lite";

const DevicePage = observer(() => {
  return (
    <div>
      <DeviceMain />
    </div>
  );
});

export default DevicePage;
