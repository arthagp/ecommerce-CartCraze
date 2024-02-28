import React from "react";
import LogoNav from "../navbar/LogoNav";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const size = 25;

  return (
    <div>
      <div className="flex justify-between items-center bg-gray-100 p-10 shadow-xl">
        <div className="flex items-center">
          <LogoNav />
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaFacebook className="text-blue-500" size={size} />
          <FaInstagram className="text-blue-500" size={size} />
          <FaTwitter className="text-blue-500" size={size} />
        </div>
      </div>
      {/*  */}
      <div className="flex max-sm:flex-col max-sm:gap-5 md:justify-around p-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Company Info</h2>
          <ul className="text-gray-600">
            <li>About us</li>
            <li>Carrier</li>
            <li>We Are Hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Legal</h2>
          <ul className="text-gray-600">
            <li>About us</li>
            <li>Carrier</li>
            <li>We Are Hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Features</h2>
          <ul className="text-gray-600">
            <li>About us</li>
            <li>Carrier</li>
            <li>We Are Hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Resources</h2>
          <ul className="text-gray-600">
            <li>About us</li>
            <li>Carrier</li>
            <li>We Are Hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:w-[320px]">
          <h2 className="font-semibold text-xl">Get In Touch</h2>
          <div className="relative w-full">
            <input
              className="h-10 w-full border-[2px] rounded-l-md p-2"
              type="text"
              placeholder="Your Email"
            />
            <button className="text-white font-medium hover:bg-blue-500 absolute bottom-0 right-0 bg-blue-400 h-10 w-24 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center md:justify-start items-center bg-gray-100 p-5">
        <h2 className="ml-5 text-gray-600 font-medium">
          Copyright&copy; Artha Gusfi P since 2024
        </h2>
      </div>
    </div>
  );
};

export default Footer;
