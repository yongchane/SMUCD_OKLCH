import React from "react";
import { ReactComponent as Daangnlogo } from "../assets/logo/daangnlogo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper function to check if the path is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="header-container">
      <div className="header-title-container">
        {/* Logo Section */}
        <div className="header-main" onClick={() => navigate("/")}>
          logo
        </div>

        {/* Navigation Links */}
        <div className="header-title-list-container">
          <div
            className="header-cardirect"
            onClick={() => navigate("/cardirect")}
          >
            OKLCH Generator Plugins
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
