import { ContentNavbarProps } from "@/types/LinkNavbar";
import Link from "next/link";
import React from "react";

const ContentMobileNav = ({ links }: ContentNavbarProps) => {
  return (
    <nav className="w-full">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <Link
              href={link.href}
              className="block text-lg font-semibold text-gray-800"
            >
              {link.title}
            </Link>
            {link.category && link.title === "Categories" && (
              <ul>
                {Object.values(link.category).map((category, index) => (
                  <li key={index}>
                    <Link key={index} href={category.href}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContentMobileNav;
