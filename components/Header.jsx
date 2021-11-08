import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "../services";
import logo from "../public/logo.png";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className="flex items-center justify-between w-full py-8 border-b border-blue-400">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link href="/" className="">
              <Image
                src={logo}
                unoptimized
                alt="logo"
                height="70px"
                width="70px"
                className="cursor-pointer"
              />
            </Link>
            <Link href="/">
              <span className="flex flex-col items-center gap-1 text-2xl font-bold text-center text-transparent text-white cursor-pointer md:text-3xl md:text-left bg-clip-text bg-gradient-to-br from-red-400 to-yellow-600">
                Institute of Engineering & Technology, Ayodhya <br />{" "}
                <span className="text-xl font-medium text-white md:text-2xl">
                  Blog | Research Paper | Article
                </span>
              </span>
            </Link>
          </div>
            {/* <h1 className="font-bold text-blue-500 transition duration-300 transform hover:underline hover:translate-x-3 hover:text-red-500">
              <Link href="https://forms.gle/1M43Ff2zZ75g9cce6">
                Apply for Blog/Article ✒️
              </Link>
            </h1> */}
          
          <h1 className="text-white">
            <Link href="/about">🎓 About Institute</Link>
          </h1>
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
