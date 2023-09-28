"use client";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { ProductsContext } from "@/context/ProductContext";
import Image from "next/image";
import SkeletonComponent from "@/components/Skeleton";
import Loader from "@/components/loader/Loader";
import { Button } from "@nextui-org/react";
import { CartContext } from "@/context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyAddedToCart = (item) =>
  toast.success(`${item.attributes.name} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#fff",
      color: "#000",
    },
  });

const notifyRemovedFromCart = (item) =>
  toast.error(`${item.attributes.name} removed from cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#000",
      color: "#fff",
    },
  });

function SingleProductPage() {
  const params = useParams();
  const { id } = params;
  const { setProductDetails, productDetails, getProductDetails } =
    useContext(ProductsContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  function removeHTMLTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }
  useEffect(() => {
    getProductDetails(id);
    return () => {
      setProductDetails([]);
    };
  }, []);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return productDetails.length !== 0 ? (
    <div>
      <ToastContainer />
      <div className="py-6">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="flex-1 px-4">
              <h2 className="mb-2 sm:hidden  leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {productDetails.attributes.name}
              </h2>
              <div className=" rounded-lg grid grid-cols-3  gap-2 grid-rows-2  mb-4">
                <div
                  x-show="image === 1"
                  className=" col-span-3 rounded-lg relative bg-gray-100 flex items-center justify-center"
                >
                  <Image
                    src={productDetails.attributes["image-urls"][0]}
                    className="object-contain mix-blend-multiply"
                    fill={true}
                    alt="product image"
                  />
                </div>

                <div
                  x-show="image === 2"
                  className="h-44 md:h-80 relative rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                >
                  {productDetails.attributes["image-urls"][1] ? (
                    <Image
                      src={productDetails.attributes["image-urls"][1]}
                      className="object-contain mix-blend-multiply"
                      fill={true}
                      alt="product image"
                    />
                  ) : (
                    <span>Image Not Available</span>
                  )}
                </div>

                <div
                  x-show="image === 3"
                  className="h-44  md:h-80 relative rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                >
                  {productDetails.attributes["image-urls"][2] ? (
                    <Image
                      src={productDetails.attributes["image-urls"][2]}
                      className="object-contain mix-blend-multiply"
                      fill={true}
                      alt="product image"
                    />
                  ) : (
                    <span>Image Not Available</span>
                  )}
                </div>

                <div
                  x-show="image === 4"
                  className="h-44  md:h-80 rounded-lg relative bg-gray-100 mb-4 flex items-center justify-center"
                >
                  {productDetails.attributes["image-urls"][3] ? (
                    <Image
                      src={productDetails.attributes["image-urls"][3]}
                      className="object-contain mix-blend-multiply"
                      fill={true}
                      alt="product image"
                    />
                  ) : (
                    <span>Image Not Available</span>
                  )}
                </div>
              </div>

              <div className="flex -mx-2 mb-4"></div>
            </div>
            <div className=" md:flex-1 px-4">
              <h2 className="mb-2 md:visible hidden leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {productDetails.attributes.name}
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  {productDetails.attributes["brand-name"]}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-bold text-indigo-600 text-3xl">
                      {productDetails.attributes["display-price"]}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">
                {removeHTMLTags(productDetails.attributes.description)}
              </p>

              <div className="flex py-4 space-x-4">
                {!cartItems.find((item) => item.id === id) ? (
                  <Button
                    variant="shadow"
                    className="px-4 py-2 text-white bg-indigo-600 text-xs font-bold uppercase rounded-lg  focus:outline-none "
                    onClick={() => {
                      addToCart(productDetails);
                      notifyAddedToCart(productDetails);
                    }}
                  >
                    Add to cart
                  </Button>
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold uppercase rounded focus:outline-none f0"
                      onClick={() => {
                        addToCart(productDetails);
                      }}
                    >
                      +
                    </Button>
                    <p className="text-gray-600">
                      {cartItems.find((item) => item.id === id).quantity}
                    </p>
                    <Button
                      className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold uppercase rounded focus:outline-none f"
                      onClick={() => {
                        const cartItem = cartItems.find(
                          (item) => item.id === id
                        );
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(productDetails);
                        } else {
                          removeFromCart(productDetails);
                        }
                      }}
                    >
                      -
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader />
    </div>
  );
}
export default SingleProductPage;
