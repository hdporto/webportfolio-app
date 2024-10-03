import React from "react";
import headerImg from "../img/headerimg.jpg";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <img src={headerImg} alt="Profile Image" className="header-img" />
        <div>
          <h1>Hans Daniel Porto</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
