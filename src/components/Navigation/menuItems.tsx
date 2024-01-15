import { MenuItem } from "./interface";

export const menuItems: MenuItem[] = [
  {
    title: "Integrations",
    to: "#",
  },
  {
    title: "Core Platform",
    to: "#",
    children: [
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
    ],
  },
  {
    title: "Company",
    to: "#",
    children: [
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
    ],
  },
  {
    title: "Resources",
    to: "#",
    children: [
      { title: "Link", to: "#" },
      { title: "Link", to: "#" },
    ],
  },
];
