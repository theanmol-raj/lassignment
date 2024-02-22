import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import user from '../assets/userpic.png'
import cared from '../assets/caret-down.svg'
import Drop from "./Dropdown";
const navitem = [
  { item: "About", id: "#about" },
  { item: "Bookings", id: "#bookings" },
  { item: "Services", id: "#services" },
  { item: "Menu", id: "#menu" },
  { item: "Download", id: "#download" },
  { item: "ContactUs", id: "#footer" },
];

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  const transitionNavbar = () => {
    window.scrollY > 100 ? setIsFixed(true) : setIsFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={` ${isFixed ? "relative" : " md:fixed top-2"}  w-full`}>
      <div className=" flex items-center justify-between space-x-5 max-w-[90rem]  mx-auto">
        <div className="flex items-center">
          <img src={logo} className=" h-16 md:h-full" alt="" />
          <div className=" hidden md:inline-flex space-x-4">
            {navitem.map((item) => (
              <a
                className=" text-sm font-medium border p-1.5 border-transparent hover:border-[#051650] rounded-md hover:scale-105 transform transition duration-300 ease-in-out"
                href={item.id}
                key={item.id}
              >
                {item.item}
              </a>
            ))}
          </div>
          
        </div>
        <div className=" md:hidden space-x-4">
            <Drop data={navitem} />
          </div>
        <div className="hidden md:flex items-center space-x-1.5">
          <img className=" h-10 rounded-full" src={user} />
          <p className=" text-white">User</p>
          <img className=" mt-1" src={cared} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
