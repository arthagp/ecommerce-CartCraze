'use client'

import api from "@/api/api";
import { useStore } from "@/store";
import { Product } from "@/types/Product";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ProductItem from "../common/ProductItem";

const ProductListCategories = () => {
  const {
    jewelery,
    mensClothing,
    womensClothing,
    electronics,
    setJewelery,
    setMensClothing,
    setWomensClothing,
    setElectronics,
  } = useStore((state) => state);

  const pathname = usePathname();

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
    <div className="flex flex-col justify-center gap-y-10 items-center mt-12 mb-44">
      <div className="flex w-full p-10">
        <h3 className="text-lg font-medium opacity-70">
         {pathname === "/category/mens-clothing"
            ? "Showing all " + mensClothing.length + " result"
            : pathname === "/category/womens-clothing"
            ? "Showing all " + womensClothing.length + " result"
            : pathname === "/category/jewelery"
            ? "Showing all " + jewelery.length + " result"
            : pathname === "/category/electronics"
            ? "Showing all " + electronics.length + " result"
            : "Showing all " + mensClothing.length + " result"}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-32">
        {
          pathname === "/category/mens-clothing"
            ? mensClothing.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))
            : pathname === "/category/womens-clothing"
            ? womensClothing.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))
            : pathname === "/category/jewelery"
            ? jewelery.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))
            : pathname === "/category/electronics"
            ? electronics.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))
            : mensClothing.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))
        }
      </div>
    </div>
  );
};

export default ProductListCategories;
