import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { client, urlFor } from "../../lib/client";
import { AppContext } from "@/context/StateContext";

function Post() {
  const router = useRouter();
  const { postSlug } = router.query;
  console.log(postSlug)
  const { getPost, post } = AppContext();

  useEffect(() => {
    if (typeof postSlug === "string") {
      getPost(postSlug);
    }
  }, [postSlug]);

  if (post && post.length > 0) {
    var imagen = post[0]?.mainImage.asset._ref;
    console.log(imagen);

    // rest of the code
  }

 

  return (
    <div className="flex flex-col items-center  2xl:max-w-[1280px]  w-full h-full mx-auto overflow-hidden ">
      <div className="text-center mt-8">
        <h2 className="font-bold text-4xl">{post[0]?.title}</h2>
      </div>
      <div className="w-full ">
        {
          imagen?
        <img
          src={urlFor(imagen)}
          className={`w-full h-full lg:h-[500px] object-contain mt-4 lg:mt-8`}
        />
        :null
}
      </div>
      <div className="w-full h-full  mt-4 px-8 lg:px-20">
        <p className="text-2xl text-justify">{post[0]?.body}</p>
      </div>
    </div>
  );
}

export default Post;
