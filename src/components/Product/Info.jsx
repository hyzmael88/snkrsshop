import React, { useEffect, useState } from "react";
import Size from "./Size";
import { AppContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";


function Info({ producto }) {
  const {addCart} = AppContext()
  const [productSize, setProductSize] = useState(null);
  const [category, setCategory] = useState(null);

  
  useEffect(() => {
    if(producto){

      setProductSize(producto.sizes[0])
    }
    
  }, [producto]) 

  
  useEffect(() => {
    client
      .fetch(`*[_id == "${producto?.category._ref}"]`)
      .then(category => setCategory(category))
  }, [producto?.category._ref]);
  

  
  

  const handleSizeClick = (size) => {
    setProductSize(size);
  };

  return (
    <div className="w-full h-full flex flex-col">
           <p className="mt-6 text-md font-medium text-gray-400 ">{category && category[0] && category[0].title}</p> 

      <div className="flex flex-row w-full h-full justify-between items-center">
        
        <div className="uppercase font-bold w-[300px]">{producto?.name}</div>
        <div className="uppercase font-bold ">
          {productSize ? (
            <span>${productSize.price}</span>
          ) : (
            <p>${producto?.sizes[0].price}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ">
          <p className="uppercase font-semibold text-sm">size</p>
          <p className="text-4xl cursor-pointer">-</p>
        </div>
        <div className="grid grid-cols-4 gap-y-4 place-items-center w-full my-6">
          {producto?.sizes.map((size, index) => (
            <Size size={size} onClick={() => handleSizeClick(size)}
            productSize={productSize}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ">
          <p className="uppercase font-semibold text-sm">Description</p>
          <p className="text-4xl cursor-pointer">-</p>
        </div>

        {producto?.description}
      </div>
      <div className="w-full">
        <button
         onClick={() => addCart(producto, productSize)} 
        className="w-full h-10 bg-black text-white uppercase font-bold mt-4">
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default Info;
