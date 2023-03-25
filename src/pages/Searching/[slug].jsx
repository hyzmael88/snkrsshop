import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client, urlFor } from "../../lib/client";
import Item from "./Item";

function Searching() {
  const router = useRouter();
  const { slug } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  const [post, setPost] = useState([]);
  const [snkrs, setSnkrs] = useState([]);

  console.log(slug);
  const busqueda = async () => {
    // Envíe una solicitud de búsqueda a su API de Sanity
    const results = await client.fetch(
      `*[
            (_type == 'blogPost' && title match '${slug}') ||
            (_type == 'product' && name match '${slug}')
          ]`
    );
    setSearchResults(results);
  };

  useEffect(() => {
    busqueda();
  }, [slug]);

  useEffect(() => {
    const allResults = [...searchResults]; // Crear una copia de los resultados para evitar mutar el arreglo original
    const snkrsResults = allResults.filter((result) => result.name); // Filtrar los resultados que tienen un nombre
    const postResults = allResults.filter((result) => result.title);

    setSnkrs(snkrsResults);
    setPost(postResults);

    // Hacer algo con los resultados filtrados (en este caso, guardarlos en una variable)
    // ...
  }, [searchResults]);

  console.log(searchResults);
  console.log(snkrs);
  console.log(post);

  return (
    <div className="flex flex-col 2xl:max-w-[1280px]  w-full h-full mx-auto overflow-hidden">
      <div className="text-6xl lg:text-8xl font-medium text-center mt-4 lg:mt-0 mb-10 lg:mb-14 ">
        Search
      </div>
      {snkrs.length > 0 ? (
        <div>
          <div className="flex flex-row justify-start">
            <h2 className="text-4xl uppercase font-semibold ml-4 ">Snkrs:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full h-full px-8 mb-14">
            {snkrs.map((item, index) => (
              <Item item={item} key={index} />
            ))}
          </div>
        </div>
      ) : null}
      {post.length > 0 ? (
        <div>
          <div className="flex flex-row justify-start">
            <h2 className="text-4xl uppercase font-semibold ml-4 ">posts:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full h-full px-8 mb-14">
            {post.map((item, index) => (
              <Item item={item} key={index} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full h-full px-8 mb-14">
        {searchResults.length == 0 ? (
          <div className="col-span-1 md:col-span-3 h-screen">
            <p className="text-2xl font-semibold text-center mt-4">
              We did not find any results😕
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Searching;
