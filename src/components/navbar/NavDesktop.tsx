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
    <div className="flex justify-center items-center">
      <LogoNav />
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.title}>
              {link.category ? (
                <>
                  <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      {Object.values(link.category).map((category) => (
                        <li key={category.title}>
                          <NavigationMenuItem>
                            <Link
                              href={category.href}
                              suppressHydrationWarning={true}
                            >
                              {category.title}
                            </Link>
                          </NavigationMenuItem>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={link.href} suppressHydrationWarning={true}>
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
