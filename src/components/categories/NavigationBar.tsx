"use client";

import { separatePathname } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex justify-center gap-x-2">
        <li>
          <Link className="font-semibold" href={"/"}>
            Home
          </Link>
        </li>
        <span>
          <SlArrowRight size={20} />
        </span>
        <li>
          <Link className="font-light opacity-60" href={pathname}>
            {separatePathname(pathname)}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
