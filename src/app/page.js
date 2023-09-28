import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";

function Home() {
  return (
    <div>
      <HeroBanner />
      <Products />
      <Categories />
    </div>
  );
}

export default Home;
