import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menu from "../component/Menu";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">
        <Menu />
        <Outlet />
      </div>
      {/* <Footer />
       */}
    </div>
  );
};

export default Layout;
