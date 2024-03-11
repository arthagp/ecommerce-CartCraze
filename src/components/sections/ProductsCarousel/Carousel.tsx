"use client";

import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Product";
import LoadingBar from "react-top-loading-bar";
import api from "@/api/api";
import { useStore } from "@/store";

export default function CarouselElement() {
  const {products, setProducts} = useStore((state) => state)
  const [progress, setProgress] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const fetchProducts = async () => {
    try {
      setProgress(40);
      setProgress(60);
      const data = await api.getAllProducts() as Product[];
      setProducts(data);
      setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <LoadingBar color="#fc0526" progress={progress} />
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-sm:w-[350px] max-w-5xl relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="my-auto w-[600px] h-[600px] md:w-[450px] md:h-[660px] flex items-center"
            >
              <div className="p-2 rounded-xl bg-white w-full h-full flex items-center">
                <Card className="bg-white border-none my-auto shadow-none">
                  <CardContent className="flex max-sm:flex-col aspect-auto items-center justify-center p-6 md:gap-3 gap-10">
                    <div className="flex flex-col text-black gap-5">
                      <h1 className="font-bold max-w-[250px] md:max-w-2xl md:text-4xl">
                        {product.title}
                      </h1>
                      <p className="font-light text-lg opacity-60">
                        {product.category}
                      </p>
                      <p className="leading-5 line-clamp-3 max-w-[250px] md:max-w-xl">
                        {product.description}
                      </p>
                      <div className="flex gap-10 md:mt-10">
                        <p className="font-semibold md:text-3xl">
                          ${product.price}
                        </p>
                        <Button className="max-sm:h-6 max-sm:w-32 text-sm">
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={450}
                      height={450}
                      priority
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:absolute max-sm:bottom-1 max-sm:left-2 carousel-action-btn hover:bg-white" />
        <CarouselNext className="max-sm:absolute max-sm:bottom-1 max-sm:right-2 carousel-action-btn hover:bg-white" />
      </Carousel>
    </>
  );
}
