import React from 'react'
import {HiArrowUpRight} from 'react-icons/hi2'
import {AppContext} from '../../context/StateContext'
import Producto from '../Home/Producto'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from 'next/link'



function Newseason() {
  const {products} = AppContext()

  const slideLeft = () => {
    var slider = document.getElementById("sliderNew");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("sliderNew");
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  var sortedProducts = products?.map((product) => {
   
    const minPrice = Math.min(...product.sizes.map((size) => size.price));
    //Math.min le puedes dar una serie de numeros y te regresa el minimo
    return { ...product, minPrice };
    
  });

  const sortedProductsRecent = [...sortedProducts].sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
  

  return (
    <div>

   
    <div className='flex flex-row w-full h-full mt-20 justify-between items-center '>
        <h3 className='text-4xl ml-4 mb-16 lg:mb-0 lg:ml-0 lg:text-2xl uppercase'>Recomendations</h3>
        <div>
        <Link href="/Store">
        <span className='hidden lg:flex flex-row border-b-[1px] border-gray-900 uppercase font-medium cursor-pointer'>
            show all &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs"/>
        </span>
        </Link>
        </div>
        
    </div>
    <div className='relative flex flex-row items-center group'>
    <MdChevronLeft
        onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
    <div id={"sliderNew"}
     className='flex flex-row  w-full h-full overflow-x-scroll  scroll-smooth scrollbar-hide ml-4 lg:ml-10 '>
    
    
    {sortedProductsRecent.slice(0,10).map((product, index) =>(

        <Producto
        key={product._id}
        producto = {product}
        />
    ))}
   
      </div>
      <MdChevronRight
        onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
    </div>
    <div className="flex flex-col items-center lg:hidden">
      <Link href="/Store">
      <button className=" font-semibold border-2 border-black px-28 py-2 uppercase">
          <span className="font-semibold">show all</span>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Newseason