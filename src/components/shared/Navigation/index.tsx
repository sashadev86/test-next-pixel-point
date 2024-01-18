import Link from "next/link";
import NavLink from "../NavLink";
import { ReactElement } from "react";
import { menuItems } from "./menuItems";
import { MenuItem } from "./interface";

const Navigation = () => {
  const renderSubMenu = (items: MenuItem[]): ReactElement => (
    <>
      {items.map((subItem, subIndex) => (
        <li className="py-1.5" key={subIndex}>
          <Link
            className="block font-roboto text-[.9375rem] leading-[.9375rem] tracking-[.0231rem] text-grey-98 hover:text-primary-1 opacity-90 transition-colors ease-in-out"
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
