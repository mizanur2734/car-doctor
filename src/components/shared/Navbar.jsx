import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-base-100 text-slate-900">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <img src="/assets/logo.svg" height={60} width={60} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-5 ">
            {navItems.map((item) => {
              return (
                <Link
                  className="font-semibold hover:text-primary duration-300"
                  href={item.path}
                  key={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
