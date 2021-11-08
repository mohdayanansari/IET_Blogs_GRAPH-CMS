import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="flex items-center justify-between w-full py-8 border-b border-blue-400">
        <div className="block ">
          <Link href="/">
            <span className="text-4xl font-bold text-white cursor-pointer">
              IET Blogs
            </span>
          </Link>
        </div>
        <div>
          <div className="hidden md:contents ">
            {categories.map((category) => (
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer ">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
