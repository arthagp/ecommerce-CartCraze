"use client";

import { useStore } from "@/store";
import React from "react";
import { usePathname } from "next/navigation";
import ProductItem from "../common/ProductItem";
import SearchBar from "../common/SearchBar";

const ProductListCategories = () => {
  // problems : untuk mencari searchBar di sini harus di bedakan sesuai dengan category masing-masing

  

  const { jewelery, mensClothing, womensClothing, electronics } = useStore(
    (state) => state
  );

  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-center gap-y-10 items-center mt-12 mb-44">
      <div className="max-w-6xl max-sm:flex-col flex justify-between items-center gap-y-5 w-full p-10">
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
        {pathname === "/category/mens-clothing"
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
            ))}
      </div>
    </div>
  );
};

export default ProductListCategories;
