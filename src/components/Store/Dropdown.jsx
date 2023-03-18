import React, { useState } from 'react';
import {BsChevronDown} from 'react-icons/bs'
import { AppContext } from "../../context/StateContext";



const Dropdown = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOption, setSelectedOption, options} = AppContext();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        onClick={toggleDropdown}
      >
        {selectedOption} &nbsp;
        <BsChevronDown className='pt-1 text-xl'/>
      </button>
      {isOpen && (
        <ul className="absolute z-10 left-0 mt-2 py-2 bg-white w-full rounded-md shadow-xl">
          {options.map((option) => (
            <li key={option} className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
              <button
                className="w-full block p-0 text-left"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
