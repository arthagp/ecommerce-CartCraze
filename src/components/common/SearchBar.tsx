"use client";

import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "../ui/input";
import { useStore } from "@/store";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { products, setFilteredProducts } = useStore((state) => state);

  const [debouncedSearchQuery] = useDebounce(searchQuery, 700);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchQuery.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [debouncedSearchQuery, products, setFilteredProducts]);

  return (
    <div className="relative w-64 h-10 rounded-md flex justify-center items-center">
      <IoIosSearch
        className="absolute inset-y-0 left-0 my-auto ml-2"
        size={20}
      />
      <Input
        className="w-64 h-full focus-visible:outline-none focus:outline-none pl-9"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
