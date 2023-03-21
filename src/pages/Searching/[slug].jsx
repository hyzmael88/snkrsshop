import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { client, urlFor } from "../../lib/client";
import Item from './Item'

function Searching() {
    const router = useRouter();
  const { slug } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  
  console.log(slug)
  const busqueda = async () =>{
    // Envíe una solicitud de búsqueda a su API de Sanity
      const results = await client.fetch(
        `*[
            (_type == 'blogPost' && title match '${slug}') ||
            (_type == 'product' && name match '${slug}')
          ]`
      );
      setSearchResults(results);
  }

  useEffect(() => {
    busqueda()
    
  }, [slug])

  console.log(searchResults)
  

  return (
    <div className="flex flex-col h-full w-full">
       <div className="text-6xl lg:text-8xl font-medium text-center mt-4 lg:mt-0 mb-10 lg:mb-14">Search</div>
         <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full h-full px-8">
         {searchResults.map((item, index) =>(
        <Item item={item}
        key = {index}
        />
      ))}
    </div>

        </div>
      
    
  )
}

export default Searching