import React from "react";
import { AppContext } from "../../context/StateContext";
import RadioButtonGenres from "./RadiButtonGenres";
import RadioButton from "./RadioButton";
import RangeSlider from "./RangeSlider";

function Sidebar() {
  const { categories, genders, products } = AppContext();

  const sortedProductsPrice = products?.map((product) => {
    const totalSales = product.sizes.reduce((acc, size) => acc + size.sales, 0);
    //reduce devuelve como resultado un valor unico

    return { ...product, totalSales };
  });
  sortedProductsPrice.sort((a, b) => b.totalSales - a.totalSales);

  const minValue = sortedProductsPrice[0]?.minPrice;
  const maxValue =
  products.reduce((max, product) => {
    return Math.max(max, product.maxPrice);
  }, 0);

  

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <p className="uppercase font-semibold mt-4">price range</p>
        <RangeSlider minValue={minValue} maxValue={maxValue} />
      </div>
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="uppercase font-semibold mr-4">brand</p>
            
          </div>
          <p className="text-4xl cursor-pointer">-</p>
        </div>
        <div className="flex flex-col">
          <RadioButton categories={categories} />

         
        </div>
      </div>
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="uppercase font-semibold mr-4">gender</p>
          </div>
          <p className="text-4xl cursor-pointer">-</p>
        </div>
        <div className="flex flex-col">
        <RadioButtonGenres genders={genders} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
