"use client";

import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useStore } from "@/store";
import api from "@/api/api";
import { Product } from "@/types/Product";

type ProductDetail = {
  product: Product;
  quantity: number;
};

const ModalCart = () => {
  const { carts } = useStore((state) => state);
  const [productCart, setProductCart] = useState<ProductDetail[]>([]);
  const [authUser, setAuthUser] = useState<string | null>(null);

  const getAuthUser = () => {
    const token = api.getAccessToken();
    if (token) {
      setAuthUser(token);
    }
  };

  const fetchProductCart = async () => {
    const productIds = carts.products.map((product) => product.productId);
    const quantity = carts.products.map((product) => product.quantity);
    try {
      const promises = productIds.map(async (productId) => {
        const response = await api.getSingleProduct(productId);
        return response;
      });
      const products = await Promise.all(promises);
      const productDetails = productIds.map((productId, index) => {
        return {
          product: products[index],
          quantity: quantity[index],
        };
      });
      setProductCart(productDetails);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(!authUser);

  useEffect(() => {
    fetchProductCart();
    getAuthUser();
  }, [carts]); // depend on carts

  return (
    <Dialog>
      <DialogTrigger>
        <SlBasket size={20} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cart</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {productCart.map((productDetail) => (
            <div
              key={productDetail.product.id}
              className="flex justify-between gap-2 border-b pb-2"
            >
              <div className="relative h-20 w-20">
                <Image
                  className="aboslute object-fit w-full h-full"
                  src={productDetail.product.image}
                  alt={productDetail.product.title}
                  fill
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 ml-2">
                <h2 className="text-base font-medium">
                  {productDetail.product.title}
                </h2>
                <p className="text-sm opacity-70">
                  {productDetail.product.category}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-medium">
                  ${productDetail.product.price}
                </h4>
                <p className="text-sm opacity-80">
                  Quantity:{" "}
                  <span className="font-medium text-blue-400">
                    {productDetail.quantity}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit">Checkout Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCart;
