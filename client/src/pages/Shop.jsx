import React from "react";
import Promo from "../components/Promo";
import CategoriesNav from "../components/CategoriesNav";

function Shop() {
  return (
    <div className="wrapper">
      <CategoriesNav />
      <div>
        <Promo />
      </div>
    </div>
  );
}

export default Shop;
