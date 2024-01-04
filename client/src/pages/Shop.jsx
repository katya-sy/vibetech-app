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
        <DeviceList />
      </div>
    </div>
  );
}

export default Shop;
