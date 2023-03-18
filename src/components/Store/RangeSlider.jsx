import React, { useState } from "react";
import {AppContext} from '../../context/StateContext'

const RangeSlider = ({minValue, maxValue}) => {

    const midValue = maxValue/2
    
  const [value, setValue] = useState(
     midValue  );
  

 


  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className="flex flex-col w-full h-full mt-4">

        <input
          type="range"
          className="w-full   bg-black  border-none cursor-pointer"
          value={value}
          min={minValue}
          max={maxValue}
          onChange={handleChange}
        />
        <div className="w-full flex flex-row justify-between">
            <div>
                <span>${minValue}</span>
            </div>
            <div>
                ${value}
            </div>
            <div>
                <span>${maxValue}</span>
            </div>
        </div>
    </div>
  );
};

export default RangeSlider;