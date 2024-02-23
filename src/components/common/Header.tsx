import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import NavDesktop from "../navbar/NavDesktop";
import { links as linksNav } from "@/lib/data/links";

const Header = () => {
  //TODO: Di dalam header ini ada header meliputi(login/register, cart, favorit), dan terdapat navbar untuk desktop/mobile
  //TODO: untuk data link navbar yang ada pada shop di tidak perlu

  return (
    <div className="w-full h-16 bg-gray-300 flex justify-around items-center gap-x-20 px-5">
      <nav className="container flex justify-around items-center px-5">
        {/* navbar */}
        <NavDesktop links={linksNav} />
        {/* navbar */}
        <div className="flex justify-center items-center gap-x-5">
          <Link href={"/login"}>Login</Link>
          <span>/</span>
          <Link href={"/register"}>Register</Link>
          <div>
            <FiSearch />
          </div>
          <div className="flex items-center gap-1">
            <SlBasket />
            <span className="text-sm font-light">1</span>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart />
            <span className="text-sm font-light">1</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
