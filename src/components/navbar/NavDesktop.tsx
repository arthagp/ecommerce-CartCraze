"use client";
import React from "react";
import LogoNav from "./LogoNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
const { fontFamily } = require("tailwindcss/defaultTheme");

import Link from "next/link";
// import {links} from '@/lib/data/links'

type NavCategory = {
  title: string;
  href: string;
};

type NavLink = {
  title: string;
  href: string;
  category?: {
    [key: string]: NavCategory;
  };
};

type NavDesktopProps = {
  links: NavLink[];
};

const NavDesktop = ({ links }: NavDesktopProps) => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-10">
      <LogoNav />
      <NavigationMenu>
        <NavigationMenuList className="gap-x-3 font-medium opacity-70">
          {links.map((link) => (
            <NavigationMenuItem key={link.title}>
              {link.category ? (
                <>
                  <NavigationMenuTrigger className="bg-neutral-200">
                    {link.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-48 pl-2 font-extralight py-2">
                    <ul className="flex flex-col gap-y-2">
                      {Object.values(link.category).map(
                        (
                          category // karena berbentuk object jadi ngambil data nya dengan cara Object.values agar menjadi array
                        ) => (
                          <NavigationMenuItem key={category.title}>
                            <Link className="font-light" href={category.href}>{category.title}</Link>
                          </NavigationMenuItem>
                        )
                      )}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link className="hover:underline font-light" href={link.href}>
                  {link.title}
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavDesktop;
