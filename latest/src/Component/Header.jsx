import React from "react";
import logo from "../image/Letter.png";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" height="50" width="70" />
      <h1>Note keeping</h1>
    </div>
  );
}

export default Header;
