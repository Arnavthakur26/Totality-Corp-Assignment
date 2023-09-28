"use client";
import Image from "next/image";
import React, { useState } from "react";
// import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";

const slides = ["/banner-1.png", "/banner-2.png", "/banner-3.png"];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  setTimeout(() => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  }, 2500);
  return (
    <section className="relative mt-4">
      <div className="sm:w-[calc(100vw-80px)] sm:h-[calc(100vh-80px)] w-[350px] h-[180px] relative mx-auto flex ">
        <div>
          {slides.map((slide, index) => (
            <div
              className={`${
                index === currentSlide ? "opacity-100" : "opacity-0 "
              } transition duration-700`}
              key={index}
            >
              <Image
                src={slide}
                alt="travel image"
                className="image rounded-lg"
                fill={true}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute -bottom-12 right-8 flex gap-3 mt-4 ">
        <BiLeftArrowCircle
          onClick={prevSlide}
          size={40}
          className="cursor-pointer"
        />
        <BiRightArrowCircle
          onClick={nextSlide}
          size={40}
          className="cursor-pointer"
        />
      </div> */}
    </section>
  );
}

export default HeroSlider;
