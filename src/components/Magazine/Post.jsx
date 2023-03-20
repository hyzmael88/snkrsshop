import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import ColorThief from "colorthief";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from 'next/link'

function Post({ item }) {
  const [fondo, setFondo] = useState(false);
  let localDate = new Date(item.publishedAt);

  /* function cambiarFondo(event) {
    console.log("entre");
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      const colorDominante = colorThief.getColor(img);
      const hex =
        "#" +
        (
          "000000" +
          (
            (colorDominante[0] << 16) |
            (colorDominante[1] << 8) |
            colorDominante[2]
          ).toString(16)
        ).slice(-6);
      console.log(hex);
      setFondo(hex);
    };
    img.src = event.target.src;
  }
  console.log(`bg-[${fondo}]`); */

  return (
    <div className=" w-full h-[250px] relative">
      <img
        src={urlFor(item?.mainImage.asset._ref)}
        className={`w-full h-full object-cover  absolute `}
        onMouseOver={()=> setFondo(true)}
      />
      <div
        className={!fondo? 'hidden' :`w-full h-full bg-gradient-to-b from-transparent to-black z-10 absolute `}
        onMouseLeave={() =>{setFondo(false)}}
      >
        <div className="flex flex-col items-center text-center justify-center w-full h-full text-white">
            <h2 className="text-xl font-bold">
                {item.title}
            </h2>
            <p className="text-lg">
            {localDate.toLocaleDateString()}
            </p>
            <span className="flex flex-row  uppercase font-bold lg:font-medium cursor-pointer mt-0 lg:mt-4 hover:underline">
             <Link href={`/Post/${item.slug.current} `}>
            read more &nbsp;
             </Link>   
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
