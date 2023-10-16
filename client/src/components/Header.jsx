import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="font-bold">
          Auth App
        </Link>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
