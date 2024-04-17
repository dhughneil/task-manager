import Link from "next/link";
import React from "react";
import { FaPlus, FaFilter, FaRegCheckSquare } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaRegCheckSquare />
      </Link>
      <ul className="flex space-x-6">
        <li className="text-green-700">David's Task Manager</li>
        <li>
        <Link href='/add'>
        <button className="flex items-center hover:text-red-600 transition-colors">
        <span className="mr-2"><FaPlus /></span> Add
          </button>
          </Link>
        </li>
        <li>
        <Link href='/filter'>
          <button className="flex items-center hover:text-red-600">
          <span className="mr-2"><FaFilter /></span> Filter
          </button>
          </Link>
        </li>
        <li>{"(Add search bar element here)"}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
