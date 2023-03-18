import React, { useEffect, useState } from "react";
import Form from "../components/Shopping/Form";
import Sumary from "../components/Shopping/Summary";
import { AppContext } from "../context/StateContext";
import { urlFor } from "../lib/client";


function Shopping() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('facebookUser')).cart)
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)

  var aux = 0
  useEffect(() => {
    
    
      
      totalCalc();
    
  }, []);
  console.log(cart)

  const totalCalc = () =>{
    cart?.map((item) =>(
      aux = aux +(item.price * item.quantity )
      
    ))
    setSubtotal(aux)
    setTotal(aux+10)
  }

 

  

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col justify-center items-center my-11">
        <h1 className="uppercase text-4xl lg:text-7xl">Shopping bag</h1>
      </div>
      <div className="flex flex-col-reverse px-6 lg:px-0  lg:flex-row w-full h-full">
        <div className="flex flex-col w-full lg:w-2/3 lg:pl-8 mt-4 lg:mt-0 mr-10">
        <Form
        cart = {cart}
        total = {total}
        />
        </div>
        <div className="flex flex-col w-full lg:w-1/3  ">
          <h3 className="uppercase font-bold mb-4">Summary</h3>
          {cart?.map((item) => (
           <Sumary
           item = {item}
           />
          ))}
          <div className="border-t-2 border-black">

          <div className="flex flex-row justify-between mt-4">
          <span className="uppercase">subtotal</span>
          <span>${subtotal}</span>
        </div>
          <div className="flex flex-row justify-between">
          <span className="uppercase">delivery</span>
          <span>$10</span>
        </div>
          <div className="flex flex-row justify-between">
          <span className="uppercase font-semibold">total</span>
          <span className="font-semibold">${total}</span>
        </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Shopping;
