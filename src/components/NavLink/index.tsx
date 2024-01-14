"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface NavLinkProps {
  to: string;
  title: string;
  children?: ReactNode;
}

const NavLink = ({ to, title }: NavLinkProps) => {
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  // const hasSubMenu = children != null;

  return (
    <Link className="font-roboto text-grey-98" href={to}>
      {title}
    </Link>
  );
};

export default NavLink;
