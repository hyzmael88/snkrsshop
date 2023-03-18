import React, { useEffect, useState } from "react";
import { AppContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import { BsXLg } from "react-icons/bs";




function Summary({ item }) {
  const { deleteItemCart} = AppContext();
  

  return (
    <div className="flex flex-row w-full mb-8 ">
      <div className="flex flex-col w-1/3  mr-4">
        <img src={urlFor(item.image)} alt="snkr" />
      </div>
      <div className="flex flex-col w-2/3 h-full lg:mt-4">
        <div className="flex flex-row justify-between">
          <p className="font-semibold uppercase text-lg w-[150px]">{item.name}</p>
          <BsXLg className="cursor-pointer " onClick={()=> deleteItemCart(item.id)} />
        </div>
        <p>
          Quantity: <span className="font-semibold">{item.quantity}</span>{" "}
        </p>
        <p>
          Size: <span className="font-semibold">{item.size} US</span>
        </p>
        <p>
          Price: <span className="font-semibold">${item.price} </span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
