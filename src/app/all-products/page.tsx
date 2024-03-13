import Categories from "@/components/common/Categories";
import ProductsList from "@/components/common/ProductsList";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const ProductsPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-10 bg-gray-100 py-12 w-full">
          <div className="flex justify-around items-center">
            <h2 className="font-semibold text-xl">All Products</h2>
            <nav>
              <ul className="flex justify-center gap-x-2">
                <li>
                  <Link className="font-semibold" href={"/"}>
                    Home
                  </Link>
                </li>
                <span>
                  <SlArrowRight size={20} />
                </span>
                <li>
                  <Link
                    className="font-light opacity-60"
                    href={"/all-products"}
                  >
                    All-Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Categories />
          </div>
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
