import React, { useEffect, useState } from 'react'
import { AppContext } from "../../context/StateContext";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import Link from 'next/link';



function Cart({cart}) {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let aux = 0 
    for(var i = 0; i < cart?.length; i++){ 
      aux = cart[i]?.quantity + aux
    }
    setTotal(aux)
  }, [cart]) 
  
  
    
   
  return (
    <div>
{
        total == 0 ?
        <div className='border-2 border-black ml-4 rounded-full p-4'>

          <HiOutlineShoppingBag className=' '/>
        </div>
    :
    <Link href='Shopping'>
    <div className='border-2 border-black ml-4 rounded-full px-5 py-3 lg:px-4 lg:py-2'>

      <span className=''> {total}</span>
    </div>
    </Link>
      }
    </div>
    
  )
}

export default Cart