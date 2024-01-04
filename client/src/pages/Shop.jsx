import React from "react";
import Promo from "../components/Promo";
import CategoriesNav from "../components/CategoriesNav";
import DeviceList from "../components/DeviceList";

function Shop() {
  return (
    <div className="wrapper">
      <CategoriesNav />
      <div>
        <Promo />
        <h2 className="title">Товары недели!</h2>
        <DeviceList deviceCount={3} />
        <h2 className="title">Рекомендуем</h2>
        <DeviceList deviceCount={3} />
      </div>
    </div>
  );
}

export default Shop;
