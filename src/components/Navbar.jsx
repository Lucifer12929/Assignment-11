import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white h-20">
      <div className=" w-[min(1440px,98%)] mx-auto flex items-center h-full">
        <img className="w-16 h-16" src={logo} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
