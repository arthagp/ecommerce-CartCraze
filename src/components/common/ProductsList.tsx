"use client";

import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useStore } from "@/store";
import api from "@/api/api";
import { Product } from "@/types/Product";
import SearchBar from "./SearchBar";

const ProductsList = () => {
  const { products, setProducts, filteredProducts } = useStore(
    (state) => state
  );

  const fetchProducts = async () => {
    try {
      const data = await api.getAllProducts();
      // ada dua cara dalam memberikan tipe pada variable di atas yaitu dengan cara memberikan type return pada getAllProducts look at file api, dan dengan cara as
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-y-10 items-center mt-12 mb-24">
      <div className="max-w-6xl max-sm:flex-col flex justify-between items-center gap-y-5 w-full p-10">
        <h3 className="text-lg font-medium opacity-70">
          Showing all {products.length} result
        </h3>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-32">
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
