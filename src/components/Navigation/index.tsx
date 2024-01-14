import Link from "next/link";
import NavLink from "../NavLink";
import { ReactElement } from "react";

interface MenuItem {
  title: string;
  to: string;
  children?: MenuItem[];
}

const Navigation = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Integrations",
      to: "#",
    },
    {
      title: "Core Platform",
      to: "#",
    },
    {
      title: "Company",
      to: "#",
    },
    {
      title: "Resources",
      to: "#",
    },
  ];

  return (
    <nav>
      <ul className="flex justify-end gap-x-10">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to} title={item.title}></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
