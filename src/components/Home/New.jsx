import React from "react";
import Kanye from "../../assets/yeezy.jpg";
import {HiArrowUpRight} from 'react-icons/hi2'
import Button from "./Button";

function New() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row w-full h-full mt-24 ">
        <div className="w-[90%] lg:w-1/2">
        <img src={Kanye} alt="kanye" className="border-2 border-black lg:border-0 " />
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <h3 className="text-5xl mb-8 mt-4 lg:mt-0">Yeezy Boost 350</h3>
        <p className="text-center font-medium mx-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <Button/>
      </div>
      
    </div>
  );
}

export default New;
