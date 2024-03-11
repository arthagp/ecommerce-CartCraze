import Image from "next/image";
import React from "react";
import ImgSale from "../../../../public/discount-summer.png";

const PreviewSale = () => {
  return (
    <div className="w-full flex max-sm:flex-col justify-center items-center my-20 gap-x-10 lg:gap-x-2 bg-primary-color p-10 max-sm:gap-10 md:p-20 text-white">
      <div className="w-full flex justify-center">
        <Image src={ImgSale} alt="summer-sale" width={400} height={400} priority/>
      </div>
      <div className="w-full flex flex-col gap-10">
        <h4 className="font-medium opacity-60">Winter Wonderland Sale 2024</h4>
        <h1 className="font-semibold text-4xl ">Chill Out with Cool Savings</h1>
        <p className="text-sm max-w-xl">
          Embrace the winter wonderland with our sensational Winter Sale 2024!
          Get ready to cozy up with unbeatable deals on all your favorite
          products, from snug winter apparel to warm home essentials and
          everything in between. Dive into a flurry of discounts, frosty offers,
          and snow-capped markdowns that will make your winter season merry and
          bright. Whether you're gearing up for outdoor adventures or snuggling
          in for cozy nights by the fire, our Winter Sale 2024 has everything
          you need to make this season unforgettable. Don't let the cold weather
          freeze your style – shop now and warm up to incredible savings that
          will melt your heart!
        </p>
      </div>
    </div>
  );
};

export default PreviewSale;
