"use client";

import * as React from "react";
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

type Product = {
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}[];

export default function CarouselElement() {
  const [products, setProducts] = React.useState<Product>([]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  /*
  </CarouselContent>
  <CarouselPrevious />
 karena di mobile ini di luar maka jadikan saja mungkin nanti aboslute di bagian dalam nya
  */

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index} className="bg-primary-color my-auto">
            <div className="p-1">
              <Card className="bg-primary-color border-none my-auto">
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                  <div className="flex flex-col text-white gap-5">
                    <h1 className="font-bold md:text-4xl">{product.title}</h1>
                    <p className="font-light text-lg opacity-60">
                      {product.category}
                    </p>
                    <p className="leading-5 line-clamp-3 max-w-xl">
                      {product.description}
                    </p>
                    <div className="flex gap-10">
                      <p className="font-semibold text-3xl">${product.price}</p>
                      <button className="bg-secondary-color font-medium py-1 px-5 rounded-lg">
                        ADD TO CHART
                      </button>
                    </div>
                  </div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={450}
                    height={450}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
