"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavLinkProps } from "./interface";

const NavLink = ({ to, title, children }: NavLinkProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasSubMenu = children != null;

  return (
    <>
      <Link
        className="font-roboto text-text-15 text-grey-98 flex items-center gap-x-1 hover:text-primary transition-colors"
        href={to}
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        {title}
        {hasSubMenu && (
          <ChevronDownIcon
            className={`w-3 h-3 transition-transform duration-300 ease-in-out ${
              isSubMenuOpen ? "rotate-180" : ""
            } text-grey-98`}
          />
        )}
      </Link>
      {hasSubMenu && (
        <ul
          className={`absolute left-0 py-1 w-full flex flex-col gap-1 bg-transparent ${
            isSubMenuOpen ? "block" : "hidden"
          }`}
          onMouseEnter={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          {children}
        </ul>
      )}
    </>
  );
};

export default NavLink;
