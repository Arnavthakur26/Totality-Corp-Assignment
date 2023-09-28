"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const notifyCartCleared = () =>
  toast.error(`Cart cleared!`, {
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

function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <div>
      <ToastContainer />
      {cartItems.length > 0 ? (
        <div>
          <div className="h-screen  pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cartItems.map((cartItem) => {
                  return (
                    <div
                      key={cartItem.id}
                      className="justify-between mb-6 rounded-lg bg-white p-6  shadow-md sm:flex sm:justify-start"
                    >
                      <div className="w-full relative rounded-lg sm:w-40 bg-gray-100">
                        {cartItem.attributes["image-urls"][0] ? (
                          <Image
                            src={cartItem.attributes["image-urls"][0]}
                            alt="product-image"
                            className="w-full rounded-lg sm:w-40 object-contain mix-blend-multiply"
                            fill={true}
                          />
                        ) : (
                          <span>No Image available</span>
                        )}
                      </div>
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {cartItem.attributes.name}
                          </h2>
                          <p className="mt-1 text-xs text-gray-700">
                            {cartItem.attributes["display-price"]}
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center gap-3 border-gray-100">
                            <span
                              onClick={() => {
                                const localCartItem = cartItems.find(
                                  (product) => product.id === cartItem.id
                                );
                                if (localCartItem.quantity === 1) {
                                  handleRemoveFromCart(cartItem);
                                } else {
                                  removeFromCart(cartItem);
                                }
                              }}
                              className="cursor-pointer rounded-lg bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              -
                            </span>
                            <p className="text-gray-600">{cartItem.quantity}</p>
                            <span
                              onClick={() => {
                                addToCart(cartItem);
                              }}
                              className="cursor-pointer rounded-lg bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              +
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm">
                              {cartItem.attributes["dispay-price"]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 h-full rounded-lg  bg-[#fffdfa] p-6 md:mt-0 md:w-1/3 ">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${getCartTotal()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">$4.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">
                      ${parseFloat(getCartTotal() + 4.99).toFixed(2)} USD
                    </p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          Your cart is empty 😢
        </div>
      )}
    </div>
  );
}

export default CartPage;
