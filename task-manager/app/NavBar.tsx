'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaPlus, FaFilter, FaRegCheckSquare } from "react-icons/fa";
import classNames from "classnames";


const NavBar = () => {
    const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaRegCheckSquare />
      </Link>
      <ul className="flex space-x-6">
        <li className="text-green-700">David's Task Manager</li>
        <li>
        <Link href='/add'>
        <button className={classNames({
            'text-zinc-500': currentPath === '/add',
            'text-zinc-900': currentPath !== '/add',
            'flex items-center hover:text-red-600 transition-colors': true
        })}>
        <span className="mr-2"><FaPlus /></span> Add
          </button>
          </Link>

        </li>
        <li>
        <Link href='/filter'>
        <button className={classNames({
            'text-zinc-500': currentPath === '/filter',
            'text-zinc-900': currentPath !== '/filter',
            'flex items-center hover:text-red-600 transition-colors': true
        })}>
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
