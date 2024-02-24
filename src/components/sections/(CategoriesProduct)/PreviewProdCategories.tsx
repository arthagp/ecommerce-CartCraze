import React from "react";
import MensCloth from "../../../../public/categories/mens-clothing.jpeg";
import WomenCloth from "../../../../public/categories/womens clothing.jpeg";
import Jewelry from "../../../../public/categories/jewelry.jpeg";
import Electronic from "../../../../public/categories/electronics.jpeg";
import Image from "next/image";

const PreviewProdCategories = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-20">
      <div className="flex flex-col justify-center gap-2 mb-10">
        <h1 className="font-semibold text-2xl md:text-3xl text-center">
          PRODUCT CATEGORIES
        </h1>
        <p className="text-center desc">
          Here are our product categories, <br /> let's explore them.
        </p>
      </div>
      <div className="flex md:flex max-sm:flex-col justify-center items-center gap-3">
        <div className="w-[350px] h-[400px] md:w-[370px]  md:h-[360px] bg-red-400 relative">
          <Image
            src={MensCloth}
            alt="Men's Clothing"
            className="w-full h-full object-cover absolute inset-0"
          />
          <span className="border bg-white px-5 shadow-2xl text-lg font-semibold absolute bottom-4 left-4">
            Men
          </span>
        </div>
        <div className="w-[350px] h-[400px] md:w-[250px] md:h-[360px] bg-red-400 relative">
          <Image
            src={WomenCloth}
            alt="Women's Clothing"
            className="w-full h-full object-cover absolute inset-0"
          />
          <span className="border bg-white px-5 shadow-2xl text-lg font-semibold absolute bottom-4 left-4">
            Women
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-[350px] h-[400px] md:w-[250px] md:h-[174px] bg-red-400 relative">
            <Image
              src={Jewelry}
              alt="Jewelry"
              className="w-full h-full object-cover absolute inset-0"
            />
            <span className="border bg-white px-5 shadow-2xl text-lg font-semibold absolute bottom-4 left-4">
              Jewelry
            </span>
          </div>
          <div className="w-[350px] h-[400px] md:w-[250px] md:h-[174px] bg-red-400 relative">
            <Image
              src={Electronic}
              alt="Electronics"
              className="w-full h-full object-cover absolute inset-0"
            />
            <span className="border bg-white px-5 shadow-2xl text-lg font-semibold absolute bottom-4 left-4">
              Electronics
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewProdCategories;
