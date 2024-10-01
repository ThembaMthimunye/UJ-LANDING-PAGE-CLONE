import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, name: "Students ", link: "#" },
    { id: 2, name: "Staff ", link: "#" },
    { id: 3, name: "Alumni & Convocation ", link: "#" },
    { id: 4, name: "About Us ", link: "#" },
    { id: 5, name: "Contact Us ", link: "#" },
    { id: 6, name: "Give to UJ ", link: "#" },
    { id: 7, name: "Brand Shop ", link: "#" },
  ];

  const Navlinks = [
    { id: 1, name: "Admissions + Aid", link: "#" },
    { id: 2, name: "Faculties + Aid", link: "#" },
    { id: 3, name: "Teaching & Learning + Aid", link: "#" },
    { id: 4, name: "Research", link: "#" },
    { id: 5, name: "4IR", link: "#" },
    { id: 6, name: "Library", link: "#" },
    { id: 7, name: "News", link: "#" },
    { id: 8, name: "Events", link: "#" },
  ];

  return (
    <nav className="overflow-hidden mb-[5rem] "> 
      <div className="bg-[#1e0e47] lg:flex h-[8rem] lg:h-12 md:h-[10rem]  ">
        <ul className="grid grid-cols-3 md:flex lg:grid-cols-7   lg:place-items-center lg:ml-[30rem]  text-center text-white px-4 ">
          {links.map((link) => (
            <li className="hover:text-orange-500 text-[9px] md:text-[10px]   lg:text-[10px] -ml-5 md:my-10 md:ml-8 hover:text-orange-500 my-2" key={link.id}>
              <a href={link.link}>
                {link.name} < span className="ml-0.5">|</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:flex justify-center align-center">
          <p className="text-white text-center lg:flex align-middle">
            <span className="hidden">Brand Shop</span>
            <span className="font-bold text-[25px] lg:text-[15px] ">Our Future. Reimagined.</span>
          </p>
        </div>
      </div>
      <div className="flex shadow-md justify-between px-3 md:px-5 bg-gray-100">
        <div className="lg:grid lg:place-items-center">
           <img
            className="h-[90px] lg:absolute lg:h-[10rem] lg:ml-[10rem] bg-center"
            src="https://www.uj.ac.za/wp-content/uploads/2021/09/university-of-johannesburg-logo.png"
            alt="UJ Logo"
          /> 
        </div>
        <div>
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RxCross2 className="text-3xl font-bold text-black" />
            ) : (
              <RxHamburgerMenu className="text-3xl font-bold text-black mt-9 lg:hidden" />
            )}
          </div>
          <div className={`${isOpen ? "block" : "hidden"} lg:block `}>
            <ul className="font-thin flex  gap-5">
              {Navlinks.map((Navlink) => (
                <li key={Navlink.id} className=" lg:ml-5 lg:text-[12px] font-bold lg:font-normal mt-4 hover:text-orange-500">
                  <a className="" href={Navlink.link}>{Navlink.name}</a>
                </li>
              ))}
              <div className="flex justify-around text-center mr-10 gap-5">
                <FaSearch className="text-3xl font-bold text-black hidden lg:block lg:mt-3 sp" />
                <RxHamburgerMenu className="text-3xl font-bold text-black hidden lg:block lg:mt-3" />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
