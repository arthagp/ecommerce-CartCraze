import React from "react";
import PreviewList from "@/components/sections/CategoriesProduct/PrewiewList";
import HeadlineSection from "@/components/common/HeadlineSection";

const PreviewProdCategories = () => {
  const title = "PRODUCT CATEGORIES";
  const description = "Here are our product categories, let's explore them.";

  return (
    <div className="container-section bg-gray-100 p-16">
      <HeadlineSection title={title} description={description} />
      <PreviewList />
    </div>
  );
};

export default PreviewProdCategories;
