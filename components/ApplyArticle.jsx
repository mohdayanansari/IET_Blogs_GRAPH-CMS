import React from "react";
import Link from "next/link";

const ApplyArticle = () => {
  return (
    <div className="sticky top-0 z-10 px-10 mb-[50px] mt-[-50px] border-b-2 py-2 border-blue-500 shadow-2xl glassmorphism">
      <h1 className="font-bold text-white transition duration-300 transform hover:underline hover:translate-x-3 hover:text-red-500">
        <Link href="https://forms.gle/1M43Ff2zZ75g9cce6">
          Apply for Blog/Article ✒️
        </Link>
      </h1>
    </div>
  );
};

export default ApplyArticle;
