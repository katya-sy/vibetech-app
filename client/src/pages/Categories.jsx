import React from "react";
import CategoriesNav from "../components/CategoriesNav";
import DeviceFilter from "../components/DeviceFilter";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";

const Categories = observer(() => {
  return (
    <div className="wrapper">
      <CategoriesNav />
      <div>
        <DeviceFilter />
        <DeviceList />
      </div>
    </div>
  );
});

export default Categories;
