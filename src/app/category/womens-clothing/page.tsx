import NavigationBar from "@/components/categories/NavigationBar";
import ProductListCategories from "@/components/categories/ProductListCategories";
import Categories from "@/components/common/Categories";
import Footer from "@/components/common/Footer";
import React from "react";

const WomensClothingPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10 bg-gray-100 py-12 w-full">
          <div className="flex justify-around items-center">
            <h2 className="font-semibold text-xl">All Products</h2>
            <NavigationBar />
          </div>
          <div>
            <Categories />
          </div>
        </div>
        <div>
          <ProductListCategories />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WomensClothingPage;
