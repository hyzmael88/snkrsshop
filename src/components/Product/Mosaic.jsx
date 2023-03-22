import React, { Fragment } from "react";
import { client, urlFor } from "../../lib/client";
import { MdChevronLeft, MdChevronRight, MdViewInAr } from "react-icons/md";
import Link from "next/link";

function Mosaic({ producto }) {
  //console.log(producto?.image)

  const slideLeft = () => {
    var slider = document.getElementById("sliderNew");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("sliderNew");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center ">
        <div className=" flex flex-row  w-full h-full  justify-between items-center ">
          
        </div>
        <div className="lg:hidden relative flex flex-row items-center group">
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
          <div
            id={"sliderNew"}
            className="flex flex-row  w-full h-full overflow-x-scroll  scroll-smooth scrollbar-hide ml-4 lg:ml-10 "
          >
            {producto?.image.map((img, index) => (
              <img src={urlFor(img.asset._ref)}
              key={index}
              alt="" />
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
        </div>
        <Link href={`/AR/${producto.slug.current}`} className='lg:hidden'>
        
        <button className="mt-8 bg-gray-800 font-semibold text-white rounded-lg py-3 px-8 flex flex-row justify-center">
        <MdViewInAr className="text-2xl mr-2" />View in AR  
      </button>
      </Link>
      </div>
      
      <div className="hidden lg:grid lg:grid-cols-2  gap-10 w-full h-full px-4">
        {producto?.image.map((img, index) => (
          <img src={urlFor(img.asset._ref)}
          key={index}
          alt="" />
        ))}
        
      </div>
    </Fragment>
  );
}

export default Mosaic;
