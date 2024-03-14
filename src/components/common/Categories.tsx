"use client";

import React, { useEffect } from "react";
import MensCloth from "../../../public/categories/mens-clothing.png";
import WomenCloth from "../../../public/categories/womens clothing.png";
import Jewelry from "../../../public/categories/jewelry.png";
import Electronic from "../../../public/categories/electronics.png";
import Image from "next/image";
import { useStore } from "@/store";
import api from "@/api/api";
import { Product } from "@/types/Product";

const Categories = () => {
  const {
    jewelery,
    mensClothing,
    womensClothing,
    electronics,
    setElectronics,
    setJewelery,
    setMensClothing,
    setWomensClothing,
  } = useStore((state) => state);

  const fetchJewelry = async () => {
    try {
      const data = (await api.getCategoriesJewelry()) as Product[];
      setJewelery(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchElectronics = async () => {
    try {
      const data = (await api.getCategoriesElectronics()) as Product[];
      setElectronics(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomensClothing = async () => {
    try {
      const data = (await api.getCategoriesWomensClothing()) as Product[];
      setWomensClothing(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMensClohting = async () => {
    try {
      const data = (await api.getCategoriesMensClothing()) as Product[];
      setMensClothing(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchElectronics();
    fetchJewelry();
    fetchMensClohting();
    fetchWomensClothing();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-52 w-52 bg-gray-200">
          <Image
            className="object-cover w-full h-full"
            src={MensCloth}
            alt="Mens Cloth"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4">
            <h4 className="text-sm font-semibold">Men's Clothes</h4>
            <p className="text-xs">{mensClothing.length} items</p>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-52 w-52 bg-gray-200">
          <Image
            className="object-cover w-full h-full"
            src={WomenCloth}
            alt="Women's Clothing"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4">
            <h4 className="text-sm font-semibold">Women's Clothing</h4>
            <p className="text-xs">{womensClothing.length} items</p>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-52 w-52 bg-gray-200">
          <Image
            className="object-cover w-full h-full"
            src={Jewelry}
            alt="Jewelry"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4">
            <h4 className="text-sm font-semibold">Jewelry</h4>
            <p className="text-xs">{jewelery.length} items</p>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-52 w-52 bg-gray-200">
          <Image
            className="object-cover w-full h-full"
            src={Electronic}
            alt="Electronics"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4">
            <h4 className="text-sm font-semibold">Electronics</h4>
            <p className="text-xs">{electronics.length} items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
