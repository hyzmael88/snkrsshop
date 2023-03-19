import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Info from "../../components/Product/Info";
import Mosaic from "../../components/Product/Mosaic";
import Recomendations from "../../components/Product/Recomendations";
import { AppContext } from "../../context/StateContext";

function Product() {
  const router = useRouter();
  const { productSlug } = router.query;
  const { product, getProduct } = AppContext();

  useEffect(() => {
    getProduct(productSlug);
  }, [productSlug]);

  console.log(product)


  return (
    <Fragment>
      <div className="w-full h-full flex flex-col px-8 lg:px-0  lg:flex-row mt-16">
        <div className="w-full lg:w-2/3">
          <Mosaic 
          producto = {product[0]}
          />
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/3">
          <Info
          producto = {product[0]}
          />
        </div>
      </div>
      <div className="w-full h-full">
        <Recomendations />
      </div>
    </Fragment>
  );
}

export default Product;
