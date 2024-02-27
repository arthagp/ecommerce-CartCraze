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
import { Button } from "@/components/ui/button";

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
  <CarouselPrevious />
  <CarouselNext />
 karena di mobile ini di luar maka jadikan saja mungkin nanti aboslute di bagian dalam nya
  */

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl rounded-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {products.map((product, index) => (
          // <CarouselItem
          //   key={index}
          //   className="my-auto md:w-[450px] md:h-[660px] flex items-center"
          // >
          //   <div className="p-2 rounded-xl bg-white w-full h-full flex items-center">
          //     <Card className="bg-white border-none my-auto shadow-none">
          //       <CardContent className="flex max-sm:flex-col aspect-auto items-center justify-center p-6">
          //         <div className="flex flex-col text-black gap-5">
          //           <h1 className="font-bold md:text-4xl">{product.title}</h1>
          //           <p className="font-light text-lg opacity-60">
          //             {product.category}
          //           </p>
          //           <p className="leading-5 line-clamp-3 max-w-xl">
          //             {product.description}
          //           </p>
          //           <div className="flex gap-10">
          //             <p className="font-semibold text-3xl">${product.price}</p>
          //             <Button>ADD TO CHART</Button>
          //           </div>
          //         </div>
          //         <div className="md:w-[320px] md:h-[320px] object-fit">
          //           <Image
          //             src={product.image}
          //             alt={product.title}
          //             fill
          //             className="w-full h-full object-cover"
          //           />
          //         </div>
          //       </CardContent>
          //     </Card>
          //   </div>
          // </CarouselItem>
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
                    <div className="flex gap-10">
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
