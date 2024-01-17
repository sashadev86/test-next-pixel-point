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
        className="flex items-center gap-x-1 font-roboto text-[.9375rem] leading-[.9375rem] tracking-[.0231rem] text-grey-98 hover:text-primary-1 opacity-90 transition-colors ease-in-out"
        href={to}
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        {title}
        {hasSubMenu && (
          <ChevronDownIcon
            className={`w-3 h-3 transition-transform ease-in-out ${
              isSubMenuOpen ? "rotate-180" : ""
            } text-current`}
          />
        )}
      </Link>
      {hasSubMenu && (
        <ul
          className={`absolute left-0 py-1 w-full flex flex-col gap-1 bg-transparent z-10 ${
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
