"use client";

import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useStore } from "@/store";
import api from "@/api/api";
import { Product } from "@/types/Product";

const ProductsList = () => {
  const {
    products,
    setProducts,
    setElectronics,
    setJewelery,
    setMensClothing,
    setWomensClothing,
  } = useStore((state) => state);

  const fetchProducts = async () => {
    try {
      const data = (await api.getAllProducts()) as Product[];
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

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
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-y-10 items-center mt-12 mb-24">
      <div className="flex w-full p-10">
        <h3 className="text-lg font-medium opacity-70">
          Showing all {products.length} result
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-32">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
