import Link from "next/link";
import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaRegCheckSquare />
      </Link>
      <ul className="flex space-x-6">
        <li className="text-green-700">David's Task Manager</li>
        <li>
          <button className="hover:text-red-600 transition-colors">Add</button>
        </li>
        <li>
          <button className="hover:text-red-600">Filter</button>
        </li>
        <li>{"(Add search bar element here)"}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
