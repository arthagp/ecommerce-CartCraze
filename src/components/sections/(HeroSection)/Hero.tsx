import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import sampleHero from "../../../../public/Hero-Right.png";
import LeftHero from "../../../../public/Hero-Left.png";

const Hero = () => {
  return (
    <div className="w-full flex justify-between">
      {/* LEFT */}
      <div className="relative p-10 bg-image text-white flex flex-col justify-center overflow-hidden">
        {/* Bg-image */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image src={LeftHero} alt="Left Hero" fill priority />
        </div>
        {/* Bg-image */}
        <div>
          <h1 className="text-4xl font-bold mb-4 leading-[50px]">
            Explore Our <br /> E-commerce Hub
          </h1>
          <p className="text-lg mb-6 opacity-80">
            Discover a new era of online shopping. Dive into our dynamic
            e-commerce platform, where convenience meets style. Browse, shop,
            and save on a wide array of products, from fashion to electronics,
            all in one place. With secure transactions and swift delivery,
            shopping has never been smoother. Join us and experience the future
            of retail today.
          </p>
          <Button className="bg-transparent border rounded-md hover:bg-white hover:text-black">SHOP NOW</Button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="hidden lg:flex relative justify-center items-center">
        <Image src={sampleHero} alt={"sampleHero"} objectFit="cover" priority />
        <div className="absolute z-10 top-0 w-full h-full bg-neutral-600 opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
