"use client";
import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { ProductsContext } from "@/context/ProductContext";

function ProductCard({ product }) {
  const { id, attributes } = product;

  return (
    <div className=" relative rounded-lg p-2 border mb-4 sm:max-w-[300px] max-w-[180px]">
      <Link href={`/product/${id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80 flex justify-center overflow-hidden ">
          <Image
            src={attributes["image-urls"][0]}
            alt="featured image"
            width={300}
            height={400}
            className="hover:scale-105 transition duration-300 "
          />
        </div>
        <div className="details flex flex-col text-center">
          <h3 className="font-medium ">
            {attributes.name.length >= 40
              ? attributes.name.slice(0, 40) + "..."
              : attributes.name}
          </h3>
          <br />
          <div className="flex justify-center gap-2">
            <p className="line-through text-gray-500">
              ${attributes["original-price"] / 10}
            </p>
            <p>${attributes.price / 10}</p>
          </div>
          <div>
            <Button
              radius="full"
              disableRipple
              className=" bg-[#ebe6da] w-[80%]  hover:bg-[#ebe6da] focus:outline-none p-1 px-2 my-2 text-slate-800 shadow-lg"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
