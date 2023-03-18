import React, { useState } from 'react'
import { AppContext } from "../../context/StateContext";

function RadioButton({categories}) {

  const { selectedCategory, setSelectedCategory} = AppContext();

  const handleRadioButtonChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    
    <div>
      <label className="block cursor-pointer">
        <input
          type="radio"
          value='All'
          checked={selectedCategory === 'All'}
          onChange={handleRadioButtonChange}
          className="mr-2"
        />
        All
      </label>
    {categories?.map((category) => (
      <label key={category._id} className="block cursor-pointer">
        <input
          type="radio"
          value={category._id}
          checked={selectedCategory === category._id}
          onChange={handleRadioButtonChange}
          className="mr-2"
        />
        {category.title}
      </label>
    ))}
     
  </div>
          
          
        
  )
}

export default RadioButton