import React, { useEffect, useState } from "react";

import { AppContext } from "../context/StateContext";
import Mosaic from "../components/Magazine/Mosaic";

function Magazine() {
  const { getPosts, posts } = AppContext();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col w-full h-full lg:px-40">
      <div className="text-6xl lg:text-8xl font-medium text-center mt-4 lg:mt-0 mb-10 lg:mb-14">Magazine</div>
      <Mosaic posts={posts} />
    </div>
  );
}

export default Magazine;
