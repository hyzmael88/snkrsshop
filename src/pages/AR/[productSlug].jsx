import { AppContext } from "@/context/StateContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function AR() {
  const router = useRouter();
  const { productSlug } = router.query;
  const { product, getProduct } = AppContext();

  console.log(productSlug);

  useEffect(() => {
    if (productSlug) {
      getProduct(productSlug);
    }
  }, [productSlug]);

  console.log(product);

  if (!product || product.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(product);

  const ar = product[0].file.asset._ref;
  const newAR = ar
    .replace("file-", "https://cdn.sanity.io/files/lxft0xov/production/")
    .replace("-glb", ".glb");
  console.log("AR", newAR);

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      <model-viewer
        className="center-block"
        style={{ width: "350px", height: "500px" }}
        bounds="tight"
        enable-pan
        src={newAR}
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        poster="poster.jpeg"
        shadow-intensity="2"
        exposure="1.19"
        auto-rotate
      ></model-viewer>
    </div>
  );
}

export default AR;
