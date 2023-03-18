import React, { Fragment, useEffect, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from 'next/link'
import { client, urlFor } from "../../lib/client";

function Entries({post}) {

  const [category, setCategory] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_id == "${post.category._ref}"]`)
      .then(category => setCategory(category))
  }, [post.category._ref]);


  let localDate = new Date(post.publishedAt);

  return (
    <Fragment>
    {/* 1 */}
    <div className="flex flex-col  lg:flex-row lg:justify-between  w-full pb-5 mt-5 border-b-2 ">
      <div className=" flex flex-col items-center">

      <img src={urlFor(post?.mainImage)} alt="blog-entry-img" className=" w-[90%] h-[150px] lg:w-[250px]" />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex flex-col mx-4 lg:mx-0 ">
          <h3 className="font-semibold text-xl lg:text-4xl mt-4 lg:mt-0 w-[350px] lg:w-[500px]">{post.title}</h3>
          <p className=" w-full lg:w-[500px]  lg:mt-5">
            {post.body.substr(0,126) + " ..."}
          </p>
        </div>

        <div className="mt-4 ml-4 lg:ml-0 flex flex-row justify-between lg:mt-auto">
          <span className="flex flex-row  uppercase font-bold lg:font-medium cursor-pointer mt-0 lg:mt-4 ">
          <Link href={`/magazine/${post.slug.current} `}>
            read more &nbsp;
             </Link>   
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
          <span className="mr-4 text-gray-400 md:hidden">{localDate.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-1 gap-4 place-items-end">{localDate.toLocaleDateString()}</div>
    </div>
    
    
    </Fragment>



  );
}

export default Entries;
