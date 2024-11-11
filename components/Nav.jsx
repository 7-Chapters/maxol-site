"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about us",
        path: "/about-us",
    },
    {
        name: "cocopeat",
        path: "/cocopeat",
    },
    {
        name: "horticulture",
        path: "/horticulture",
    },
];

const Nav = () => {
    const pathname = usePathname(); 
    return (
        <nav className="flex gap-8">
          {links.map((link, index) => (
            <Link href={link.path} key={index} className="capitalize font-medium">
              {link.name}
            </Link>
          ))}
        </nav>
    );
};

export default Nav;
