import React from "react";
import { NavbarMenu } from "C:/Users/DELL/Desktop/react pro/my-project/src/mockData/data.js";
import { IoMdMenu } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white  top-0 left-0 w-full z-50">
        <div className="container flex justify-between items-center py-8">
          <div className="text-4xl flex items-center gap-2 pl-10 font-bold">
            <h1 className=" text-blue-900">Student</h1>
            <p className="text-orange-600 text-3xl">Portal</p>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-0">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    {/* Use target="_blank" to open in a new tab */}
                    <Link
                      to={item.link}
                      target={item.openInNewTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-block py-4 px-7 text-1xl hover:text-blue-800 font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-4">
              <Link
                to={"/institute"}
                className="text-1xl text-white font-semibold bg-blue-900  hover:text-orange-300 rounded-2xl border-2 border-x-2 border-y-1 py-2 px-10 duration-1000"
              >
                For Institute
              </Link>

              <Link
                to={"/LogIn"}
                className="text-1xl text-white font-semibold  bg-blue-900 hover:text-orange-300 rounded-2xl border-2 border-x-2 border-y-1 py-2 px-10 duration-1000"
              >
                LogIN
              </Link>
            </div>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            ></div>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <IoMdMenu className="text-4xl" />
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <ResponsiveMenu open={open} />
      </div>
    </>
  );
};

export default Navbar;
