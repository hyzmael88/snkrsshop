import { client } from "@/lib/client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from 'next/router';
import { AppContext } from "@/context/StateContext";
import Searchitems from "./Searchitems";
import Link from "next/link";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();
    const {setMovil,movil} = AppContext();
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Envíe una solicitud de búsqueda a su API de Sanity
      setMovil(false)
      router.push(`/Searching/${searchTerm}`);
      setSearchTerm('')
     
    };
   
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const busqueda = async () =>{
      // Envíe una solicitud de búsqueda a su API de Sanity
        const results = await client.fetch(
          `*[
              (_type == 'blogPost' && title match '${searchTerm}') ||
              (_type == 'product' && name match '${searchTerm}')
            ]`
        );
        setSearchResults(results);
    }

    useEffect(() => {
      if(movil== false){

        busqueda()
      }
    }, [searchTerm])
    

  return (
    <div className="flex flex-col w-[220px] h-full relative">
  <form onSubmit={handleSubmit} className="flex flex-row justify-between w-full h-full border-b-2 border-gray-400 cursor-pointer relative ">
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Buscar..."
    />
    <FiSearch className="mt-1" />
    {
      searchResults?

    <div className="flex flex-col absolute top-8 bg-white  w-[220px] ">
      <ul>
        {
          searchTerm.length>4 && searchResults.length==0?
          <li className='text-center cursor-default'>Not found...</li>
          :null
        }
        {
          searchResults.slice(0,3).map((item,index) =>(

            <Searchitems
            item={item}
            key={index}
            />
          ))
        }
        {
          searchResults.length>2?

        <Link href={`/Searching/${searchTerm}`}>
        <li className='hover:bg-gray-200 text-center'>More...</li>
        </Link>:
        null
        }
      </ul>
    </div>:
    null
    }
    
  </form>

 
</div>
  );
}

export default Search;
