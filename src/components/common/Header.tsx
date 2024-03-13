"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import NavDesktop from "../navbar/NavDesktop";
import { links as linksNav } from "@/lib/data/links";
import { FaRegUser } from "react-icons/fa";
import api from "@/api/api";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";
import MobileNavbar from "../navbar/MobileNavbar";

const Header = () => {
  /* ISSUE: Karena tidak ada fetchUser dengan AuthUser seperti user/me atau verifyToken, 
  maka untuk handle button Logout/login, tidak secara langsung muncul karena authUser berisi 
  value dari localStorage yang mana ini merupakan clientSide yang berada di browser, 
  jadi untuk memunculkan Button Logout harus reload terlebih dahulu 
  
  TEMPORARY SOLUTION: Dengan menambahkan depend products ke useEffect, maka ketika products dia render ulang,
  */

  const iconSize = 20;
  const [scrolled, setScrolled] = useState(0);
  const [authUser, setAuthUser] = useState<string | null>(null);
  const { products } = useStore((state) => state);
  const router = useRouter();

  const handleScrolled = () => {
    setScrolled(window.scrollY);
  };

  const getAuthUser = () => {
    const token = api.getAccessToken();
    if (token) {
      setAuthUser(token);
    }
  };

  const userLogout = () => {
    api.removeToken();
    setAuthUser(null);
    router.push("/login");
  };

  useEffect(() => {
    getAuthUser();
  }, [products]);

  useEffect(() => {
    document.addEventListener("scroll", handleScrolled);

    return () => {
      document.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled > 0 ? "shadow-3xl" : ""
      } sticky top-0 z-50 w-full bg-white h-16 flex items-center border-b border-gray-200`}
    >
      <nav className="container flex justify-between items-center">
        {/* Navbar */}
        <NavDesktop links={linksNav} />
        <MobileNavbar />
        {/* Navbar */}
        <div className="flex justify-center items-center gap-x-5 text-blue-500">
          <div className="flex items-center font-semibold gap-x-2">
            <FaRegUser />
            {authUser ? (
              <Button onClick={userLogout}>Logout</Button>
            ) : (
              <>
                <Link href={"/login"}>Login</Link>
                <span>/</span>
                <Link href={"/register"}>Register</Link>
              </>
            )}
          </div>
          {/* <div>
            <FiSearch size={iconSize} />
          </div> */}
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
