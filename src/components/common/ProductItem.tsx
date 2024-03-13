import Image from "next/image";
import React from "react";
import MensCloth from "../../../public/categories/mens-clothing.png";
import { Product } from "@/types/Product";
import Link from "next/link";
import { useStore } from "@/store";

const ProductItem = ({ image, title, category, price, id }: Product) => {
  return (
    <div className="w-64 h-96">
      <div className="relative w-full h-80">
        <Image
          className="object-fit w-full h-full absolute inset-0"
          src={image}
          alt="Men's Clothing"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-2 flex flex-col gap-y-1">
        <Link
          href={`/products/${id}`}
          className="font-semibold text-sm hover:underline"
        >
          {title}
        </Link>
        <p className="font-light opacity-55 text-sm">{category}</p>
        <p className="text-sm font-bold text-primary-color">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
