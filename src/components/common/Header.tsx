"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import NavDesktop from "../navbar/NavDesktop";
import { links as linksNav } from "@/lib/data/links";
import { FaRegUser } from "react-icons/fa";
import api from "@/api/api";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  /* ISSUE: Karena tidak ada fetchUser dengan AuthUser seperti user/me atau verifyToken, 
  maka untuk handle button Logout/login, tidak secara langsung muncul karena authUser berisi 
  value dari localStorage yang mana ini merupakan clientSide yang berada di browser, 
  jadi untuk memunculkan Button Logout harus reload terlebih dahulu 
  
  TEMPORARY SOLUTION: Dengan menambahkan depend scrolled ke useEffect, maka ketika scrolled dia render ulang,
  */

  const iconSize = 20;
  const [scrolled, setScrolled] = useState(0);
  const [authUser, setAuthUser] = useState<string | null>(null);
  const router = useRouter();

  const handleScrolled = () => {
    setScrolled(window.scrollY);
  };

  const getAuthUser = () => {
    const token = localStorage.getItem("token");
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
  }, [scrolled]);

  useEffect(() => {
    document.addEventListener("scroll", handleScrolled);

    return () => {
      document.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  // Menampilkan tombol Logout jika pengguna sudah login
  const renderLogoutButton = () => {
    if (authUser) {
      return <Button onClick={userLogout}>Logout</Button>;
    }
    return null;
  };

  return (
    <div
      className={`${
        scrolled > 0 ? "shadow-3xl" : ""
      } sticky top-0 z-50 w-full bg-white h-16 flex items-center border-b border-gray-200`}
    >
      <nav className="container flex justify-between items-center">
        {/* Navbar */}
        <NavDesktop links={linksNav} />
        {/* Navbar */}
        <div className="flex justify-center items-center gap-x-5 text-blue-500">
          <div className="flex items-center font-semibold gap-x-2">
            <FaRegUser />
            {renderLogoutButton()}
            {!authUser && (
              <>
                <Link href={"/login"}>Login</Link>
                <span>/</span>
                <Link href={"/register"}>Register</Link>
              </>
            )}
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
