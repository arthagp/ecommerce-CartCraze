import React from "react";
import PreviewList from "@/components/sections/(CategoriesProduct)/PrewiewList";

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
      <PreviewList />
    </div>
  );
};

export default PreviewProdCategories;
