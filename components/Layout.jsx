import React from "react";
import { Header, ApplyArticle, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ApplyArticle />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
