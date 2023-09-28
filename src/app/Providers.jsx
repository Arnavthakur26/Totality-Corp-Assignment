"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
function Providers({ children }) {
  return (
    <div>
      <NextUIProvider>
        <ProductProvider>
          <CartProvider>{children}</CartProvider>
        </ProductProvider>
      </NextUIProvider>
    </div>
  );
}

export default Providers;
