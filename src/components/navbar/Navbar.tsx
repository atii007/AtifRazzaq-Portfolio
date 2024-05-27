"use client";
import React from "react";
import { links } from "../../data";
import Link from "next/link";
import "./navbar.css";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
        <ul className="nav_list">
          {links.map(({ name, icon, path }, index) => {
            const isActive = pathName === path;
            return (
              <li className="nav_item" key={index}>
                <Link
                  href={path}
                  className={`nav_link ${isActive ? "active-nav" : ""}`}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav_toggle animate-toggle" : "nav_toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
