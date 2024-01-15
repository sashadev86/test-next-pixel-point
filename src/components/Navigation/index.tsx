import Link from "next/link";
import NavLink from "../NavLink";
import { ReactElement } from "react";
import { menuItems } from "./menuItems";
import { MenuItem } from "./interface";

const Navigation = () => {
  const renderSubMenu = (items: MenuItem[]): ReactElement => (
    <>
      {items.map((subItem, subIndex) => (
        <li key={subIndex}>
          <Link
            className="block font-roboto text-text-15 text-grey-98 hover:text-primary transition-colors"
            href={subItem.to}
          >
            {subItem.title}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav>
      <ul className="flex justify-end gap-x-10">
        {menuItems.map((item, index) => (
          <li className="relative" key={index}>
            <NavLink to={item.to} title={item.title}>
              {item.children && renderSubMenu(item.children)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
