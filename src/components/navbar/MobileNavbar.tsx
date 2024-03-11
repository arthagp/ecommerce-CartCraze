import React from "react";
import { IoMenu } from "react-icons/io5";
import LogoNav from "./LogoNav";
import ContentMobileNav from "./ContentMobileNav";
import { links as linksNav } from "@/lib/data/links";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-10 h-10 flex items-center">
          <IoMenu size={35} className="lg:hidden mr-2" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <LogoNav />
          </SheetTitle>
        </SheetHeader>
        <div className="flex gap-4 py-12">
          <ContentMobileNav links={linksNav} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
