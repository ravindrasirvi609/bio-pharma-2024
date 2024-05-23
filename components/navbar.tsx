import React from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  route: string;
}

interface Props {
  navItems: NavItem[];
}

const Navigation: React.FC<Props> = ({ navItems }) => (
  <nav className="flex items-center justify-between py-4 px-0 box-border gap-5 text-xl text-darkslategray font-semibold">
    {navItems.map((item, index) => (
      <Link
        key={index}
        href={item.route}
        className="font-medium text-white no-underline hover:bg-crimson-100 hover:text-white cursor-pointer py-2 px-4 rounded-lg"
      >
        {item.name}
      </Link>
    ))}
  </nav>
);

export default Navigation;
