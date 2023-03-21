import { urlFor } from "@/lib/client";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function Item({ item }) {
  const [fondo, setFondo] = useState(false);
  return (
    <div className="w-full h-[250px] items-center text-center relative">
      {item.mainImage && item.mainImage.asset ? (
        <img
          src={urlFor(item?.mainImage.asset._ref)}
          className={`w-full h-full object-cover  absolute `}
          onMouseOver={() => setFondo(true)}
        />
      ) : null}
      {item.image && item.image.length > 0 ? (
        <img
          src={urlFor(item?.image[0].asset._ref)}
          className={`w-full h-full object-contain  absolute `}
          onMouseOver={() => setFondo(true)}
        />
      ) : null}
      <div
        className={
          !fondo
            ? "hidden"
            : `w-full h-full bg-gradient-to-b from-transparent to-black z-10 absolute `
        }
        onMouseLeave={() => {
          setFondo(false);
        }}
      >
        <div className="flex flex-col items-center text-center justify-center w-full h-full text-white">
          <h2 className="text-xl font-bold">{item?.title}</h2>
          <h2 className="text-xl font-bold">{item?.name}</h2>
          {item.mainImage ? (
            <span className="flex flex-row  uppercase font-bold lg:font-medium cursor-pointer mt-0 lg:mt-4 hover:underline">
              <Link href={`/Post/${item.slug.current} `}>read more &nbsp;</Link>
              <HiArrowUpRight className=" mt-2 text-xs" />
            </span>
          ) : null}
          {item.image && item.image.length > 0 ? (
            <span className="flex flex-row  uppercase font-bold lg:font-medium cursor-pointer mt-0 lg:mt-4 hover:underline">
              <Link href={`/Product/${item.slug.current} `}>
                see more &nbsp;
              </Link>
              <HiArrowUpRight className=" mt-2 text-xs" />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Item;
