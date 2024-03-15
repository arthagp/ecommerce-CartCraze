import React from "react";
import { SlBasket } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Jewelry from "../../../public/categories/jewelry.png";
import Electronic from "../../../public/categories/electronics.png";

const ModalCart = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SlBasket size={20} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cart</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {/* Item 1 */}
          <div className="flex justify-between border-b pb-2">
            <div className="relative h-20 w-20">
              <Image
                className="aboslute object-fit w-full h-full"
                src={Jewelry}
                alt="Jewelry"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1 ml-2">
              <h2 className="text-lg font-medium">Product Name</h2>
              <p className="text-sm opacity-70">Category</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">$100</h4>
              <p className="text-sm opacity-80">
                Quantity: <span className="font-medium text-blue-400">2</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2">
            <div className="relative h-20 w-20">
              <Image
                className="aboslute object-fit w-full h-full"
                src={Electronic}
                alt="Electronic"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1 ml-2">
              <h2 className="text-lg font-medium">Product Name</h2>
              <p className="text-sm opacity-70">Category</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-medium">$100</h4>
              <p className="text-sm opacity-80">
                Quantity: <span className="font-medium text-blue-400">2</span>
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Checkout Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCart;
