import React, { useState } from 'react'
import { AppContext } from "../../context/StateContext";


function RadioButtonGenres({genders}) {
  const { selectedGender, setSelectedGender} = AppContext();

  const handleRadioButtonChange = (e) => {
    setSelectedGender(e.target.value);
  };
  return (
    
    <div>
      <label className="block cursor-pointer">
        <input
          type="radio"
          value='All'
          checked={selectedGender === 'All'}
          onChange={handleRadioButtonChange}
          className="mr-2"
        />
        All
      </label>
    {genders?.map((gender) => (
      <label key={gender._id} className="block cursor-pointer">
        <input
          type="radio"
          value={gender._id}
          checked={selectedGender === gender._id}
          onChange={handleRadioButtonChange}
          className="mr-2"
        />
        {gender.gender}
      </label>
    ))}
     
  </div>
          
          
        
  )
}

export default RadioButtonGenres