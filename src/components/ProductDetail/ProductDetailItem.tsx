"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { Product } from "@/types/Product";
import api from "@/api/api";

const ProductDetailItem = ({ slug }: { slug: string }) => {
  const [productItem, setProductItem] = useState<Product>({} as Product);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fetchItemProduct = async () => {
    try {
      const response = await api.getItemProduct(slug);
      setProductItem(response);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchItemProduct();
  }, []);

  const sizeIcon = 15;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (!productItem) {
    return null;
  }

  return (
    <div className="flex gap-10 max-sm:flex-col justify-center items-center p-10 bg-gray-100">
      <div className="w-96 h-96 relative overflow-hidden rounded-lg">
        <Image
          className="w-full h-full object-fit absolute inset-0"
          src={productItem.image}
          alt="Women's Clothing"
          fill
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h2 className="font-semibold text-2xl mb-2 max-w-sm">
          {productItem.title}
        </h2>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-600">4.5 (120 reviews)</span>
        </div>
        <p className="font-bold text-3xl text-blue-700 mb-2">
          ${productItem.price}
        </p>
        <p className="text-gray-600 mb-4">
          Available: <span className="text-green-600">In Stock</span>
        </p>
        <div
          className={`mb-4 ${
            showFullDescription
              ? "max-h-full overflow-y-auto"
              : "max-h-[7em] overflow-hidden"
          }`}
        >
          <p className="text-gray-600 max-w-xs">{productItem.description}</p>
        </div>
        {/* {productItem.description.split("\n").length > 7 && (
          <button
            onClick={toggleDescription}
            className="text-blue-500 underline"
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )} */}
        <div className="flex items-center mb-4">
          <Button className="mr-3">Buy This Item</Button>
          <div className="flex gap-x-3">
            <div className="w-10 h-10 bg-white shadow-2xl rounded-full flex justify-center items-center">
              <CiHeart size={sizeIcon} className="text-pink-500" />
            </div>
            <div className="w-10 h-10 bg-white shadow-2xl rounded-full flex justify-center items-center">
              <SlBasket size={sizeIcon} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
