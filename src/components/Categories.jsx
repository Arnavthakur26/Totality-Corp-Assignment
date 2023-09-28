"use client";
import React, { Fragment } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@nextui-org/react";
import HeadingComponent from "./HeadingComponent/HeadingComponent";

export default function App() {
  return (
    <section>
      <span>
        <HeadingComponent heading={"Categories"} />
      </span>
      <div className=" mx-auto my-8 gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            width={300}
            height={200}
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://source.unsplash.com/random/?makeupproduct"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://source.unsplash.com/random/?makeupphoto"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://source.unsplash.com/random/?makeups"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://source.unsplash.com/random/?makeupbrush"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://source.unsplash.com/random/?makeup"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
