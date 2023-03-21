import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import ColorThief from "colorthief";
import Post from "./Post";

function Mosaic({ posts }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-full h-full px-8">
      {posts.map((item, index) => (
        <Post item={item}
        key = {index}
        />
      ))}
    </div>
  );
}

export default Mosaic;
