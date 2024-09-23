import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "../component/Menu";
import OklchView from "../component/OklchView";

const Layout = () => {
  const location = useLocation();
  const showPage = location.pathname === "/studies";
  const oklchRef = useRef(null); // OklchView의 위치를 추적할 Ref
  const [isSticky, setIsSticky] = useState(true); // Menu가 sticky 상태인지 여부

  useEffect(() => {
    const handleScroll = () => {
      if (oklchRef.current) {
        const oklchPosition = oklchRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // OklchView가 viewport에 진입했을 때
        if (oklchPosition <= windowHeight) {
          setIsSticky(false); // sticky 해제
        } else {
          setIsSticky(true); // sticky 유지
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isGuiPage = location.pathname === "/gui";

  return (
    <div
      className="layout-container"
      style={{ background: isGuiPage ? "#ECECEC" : "rgba(255, 255, 255, 0)" }}
    >
      <Header />
      <div className="layout-content">
        <div className={`menu-container ${isSticky ? "sticky" : ""}`}>
          <Menu />
        </div>
        <Outlet />
      </div>
      {showPage && <OklchView ref={oklchRef} />}
    </div>
  );
};

export default Layout;
