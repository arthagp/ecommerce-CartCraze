"use client";

import React, { useEffect, useState } from "react";
import CarouselElement from "./Carousel";

const ProductsPreviewCarousel = () => {
  

  return (
    <div className="container-section hidden md:flex bg-primary-color p-20">
      <CarouselElement />
    </div>
  );
};

export default ProductsPreviewCarousel;
