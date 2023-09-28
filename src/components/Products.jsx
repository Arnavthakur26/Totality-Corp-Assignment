import React from "react";
import ProductGrid from "./ProductGrid";
import HeadingComponent from "./HeadingComponent/HeadingComponent";

function Products() {
  return (
    <div>
      <HeadingComponent heading={"Featured Products"} />
      <ProductGrid />
    </div>
  );
}

export default Products;
