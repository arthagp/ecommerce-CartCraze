import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import NavDesktop from "../navbar/NavDesktop";
import { links as linksNav } from "@/lib/data/links";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  //TODO: Di dalam header ini ada header meliputi(login/register, cart, favorit), dan terdapat navbar untuk desktop/mobile
  //TODO: untuk data link navbar yang ada pada shop di tidak perlu

  const iconSize = 20;

  return (
    <div className="sticky top-0 z-50 w-full bg-white h-16 flex items-center">
      <nav className="container flex justify-between items-center">
        {/* navbar */}
        <NavDesktop links={linksNav} />
        {/* navbar */}
        <div className="flex justify-center items-center gap-x-5 text-blue-500">
          <div className="flex items-center font-semibold gap-x-2">
            <FaRegUser />
            <Link href={"/login"}>Login</Link>
            <span>/</span>
            <Link href={"/register"}>Register</Link>
          </div>
          <div>
            <FiSearch size={iconSize} />
          </div>
          <div className="flex items-center gap-1">
            <Link href={"/"}>
              <SlBasket size={iconSize} />
            </Link>
            <span className="text-sm font-light">1</span>
          </div>
          <div className="flex items-center gap-1">
            <Link href={"/"}>
              <CiHeart size={25} />
            </Link>
            <span className="text-sm font-light">1</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
