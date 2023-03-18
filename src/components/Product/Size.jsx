import React from "react";

function Size({ size, onClick, productSize }) {

  return (
    <div onClick={onClick}
     className={`flex flex-row justify-center font-semibold items-center border-2
     ${size === productSize?
      "bg-black text-white":
      "bg-white text-black"
    }
      border-black w-[70px] cursor-pointer 
      hover:bg-black hover:text-white
      `}>
      {size.size} US
    </div>
  );
}

export default Size;
