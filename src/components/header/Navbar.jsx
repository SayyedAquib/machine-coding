import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 p-4">
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold text-lg">Machine Coding</span>

        <span>
          <Link
            to="/machine-coding"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Infinite Scroll
          </Link>
        </span>
        <span>
          <Link
            to="/autocompletesearchbar"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Auto Complete Search Bar
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
