import { client } from "@/lib/client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/router';
import { AppContext } from "@/context/StateContext";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const {setMovil} = AppContext();
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Envíe una solicitud de búsqueda a su API de Sanity
      setMovil(false)
      router.push(`/Searching/${searchTerm}`);
     
    };
   
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    
  return (
    <div className="flex flex-col w-[220px] h-full relative">
  <form onSubmit={handleSubmit} className="flex flex-row justify-between w-full h-full border-b-2 border-gray-400 cursor-pointer ">
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Buscar..."
    />
    <FiSearch className="mt-1" />
    
  </form>

 
</div>
  );
}

export default Search;
