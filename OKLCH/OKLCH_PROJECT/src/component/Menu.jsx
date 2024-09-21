import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div className="menu-define" onClick={() => navigate("/")}>
          Define OKLCH
        </div>
        <div className="menu-study" onClick={() => navigate("/studies")}>
          Studies
        </div>
        <div className="menu-gui" onClick={() => navigate("/gui")}>
          GUI design system
        </div>
      </div>
    </div>
  );
};

export default Menu;
