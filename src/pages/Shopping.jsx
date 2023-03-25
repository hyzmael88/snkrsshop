import React, { useEffect, useState } from "react";
import Form from "../components/Shopping/Form";
import Sumary from "../components/Shopping/Summary";
import { AppContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from '../lib/getStripe'


function Shopping() {
  const [cart, setCart] = useState([])
  const [id, setId] = useState(null)
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)

  var aux = 0
  useEffect(() => {
    const storedId = JSON.parse(localStorage.getItem('facebookUser'))?.facebookId;
    if(storedId){
      setId(storedId)
    }
    const storedCart = JSON.parse(localStorage.getItem('facebookUser'))?.cart;
    if (storedCart && storedCart.length !== cart.length) {
      setCart(storedCart);
    }
      
      totalCalc();
    
  }, [cart]);
  console.log(cart)

  const totalCalc = () =>{
    cart?.map((item) =>(
      aux = aux +(item.price * item.quantity )
      
    ))
    setSubtotal(aux)
    setTotal(aux+10)
  }

  const handleFormSubmit = async () => {
    
    const stripe = await getStripe();
  
    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: cart,
          id: id,
          total: total
        })
      });

      if(response.statusCode === 500) return

  
      const data = await response.json();
      stripe.redirectToCheckout({sessionId: data.id})

/*       toast.loading('Redirecting...')
 */      
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId
      });
  
    } catch (error) {
      console.log(error);
    }
  };

 

  

  return (
    <div className="2xl:max-w-[1280px]  w-full h-full mx-auto overflow-hidden flex flex-col">
      <div className="flex flex-col justify-center items-center my-11">
        <h1 className="uppercase text-4xl lg:text-7xl">Shopping bag</h1>
      </div>
      <div className="flex flex-col-reverse px-6 lg:px-0  lg:flex-row w-full h-full">
        {/* <div className="flex flex-col w-full  lg:pl-8 mt-4 lg:mt-0 mr-10">
        <Form
        id = {id}
        cart = {cart}
        total = {total}
        />
        </div> */}
        <div className="flex flex-col w-full   ">
          <h3 className="uppercase font-bold mb-4">Summary</h3>
          {cart?.map((item, index) => (
           <Sumary
           key = {index}
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
        <button
          className="w-full bg-black text-white text-sm uppercase font-semibold py-4 mt-4"
          onClick={handleFormSubmit}
          type="submit"
        >
          continue
        </button>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Shopping;
