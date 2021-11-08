import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <>
      <div className="sticky bottom-0 z-10 flex items-center justify-center w-full py-1 border-t border-blue-400 shadow-2xl glassmorphism">
        <h1 className="text-xs font-semibold text-gray-800 ">
          {" "}
          Created by{" "}
          <Link href="https://github.com/objectorienteddev07">
            Ayan Ansari
          </Link>{" "}
          | IET, Ayodhya | {new Date().getFullYear()}{" "}
        </h1>
      </div>
    </>
  );
};

export default Footer;
