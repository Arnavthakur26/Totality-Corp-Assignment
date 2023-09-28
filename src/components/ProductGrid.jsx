"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import { Pagination, Checkbox } from "@nextui-org/react";
import ProductCard from "./ProductCard";
import Loader from "./loader/Loader";
import { ProductsContext } from "@/context/ProductContext";
import CategoryFilter from "./CategoryFilter";

function ProductGrid() {
  const { setProducts, products, productsMeta, getData } =
    useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState(1);

  const productGridTopRef = useRef();
  const productGridTopOffset = productGridTopRef.current
    ? productGridTopRef.current.offsetTop
    : 0;

  useEffect(() => {
    setProducts([]);
    getData(currentPage);
    scrollTo({
      top: productGridTopOffset - 100,
      left: 0,
      behavior: "smooth",
    });
    return () => {};
  }, [currentPage]);

  const totalPages = productsMeta["total-pages"];

  return (
    <div>
      <div className=" flex justify-around " ref={productGridTopRef}>
        <div className="filters sm:flex  flex-[0.5] text-center sm:visible hidden">
          <div className="flex flex-col">
            <span>Filter By Category</span>
            <hr className="mt-2" />
            <CategoryFilter />
          </div>
        </div>
        <div className="product-grid ">
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 justify-items-center relative">
            {products.length !== 0 ? (
              products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            ) : (
              <div className="h-screen w-full flex justify-center  items-center">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-28">
        <Pagination
          total={totalPages}
          classNames={{ cursor: "bg-[#ebe6da]", item: "bg-gray-200" }}
          initialPage={1}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default ProductGrid;
