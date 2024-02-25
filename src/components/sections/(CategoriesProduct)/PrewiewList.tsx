import React from "react";
import Image from "next/image";
import MensCloth from "../../../../public/categories/mens-clothing.jpeg";
import WomenCloth from "../../../../public/categories/womens clothing.jpeg";
import Jewelry from "../../../../public/categories/jewelry.jpeg";
import Electronic from "../../../../public/categories/electronics.jpeg";

const PrewiewList = () => {
  return (
    <div className="flex max-sm:flex-col justify-center items-center gap-3">
      <div className="w-[350px] h-[400px] md:w-[370px] md:h-[360px] shadow-xl relative">
        <Image
          src={MensCloth}
          alt="Men's Clothing"
          className="w-full h-full object-cover absolute inset-0"
        />
        <span className="border bg-white px-5 shadow-2xl text-lg font-semibold absolute bottom-4 left-4">
          Men
        </span>
      </div>
      <div className="w-[350px] h-[400px] md:w-[250px] md:h-[360px] shadow-xl relative">
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
        <div className="w-[350px] h-[400px] md:w-[250px] md:h-[174px] shadow-xl relative">
          <Image
            src={Jewelry}
            alt="Jewelry"
            className="w-full h-full object-cover absolute inset-0"
          />
          <span className="border bg-white px-5 shadow-2xl text-lg font-semibold absolute bottom-4 left-4">
            Jewelry
          </span>
        </div>
        <div className="w-[350px] h-[400px] md:w-[250px] md:h-[174px] shadow-xl relative">
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
  );
};

export default PrewiewList;
