import ProductDetailItem from "@/components/ProductDetail/ProductDetailItem";
import Categories from "@/components/common/Categories";
import Footer from "@/components/common/Footer";
import React from "react";

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <>
      <div>
        <div className="flex flex-col gap-10 bg-gray-100 py-12 w-full">
          <div>
            <Categories />
          </div>
          <div className="flex px-24">
            <h2 className="font-semibold text-xl">Product Detail</h2>
          </div>
        </div>
        <div>
          <ProductDetailItem slug={slug} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
