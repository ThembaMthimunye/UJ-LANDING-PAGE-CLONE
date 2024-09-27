import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, name: "Student", link: "#" },
    { id: 2, name: "Staff", link: "#" },
    { id: 3, name: "Alumni & Convocation", link: "#" },
    { id: 4, name: "About Us", link: "#" },
    { id: 5, name: "Contact Us", link: "#" },
    { id: 6, name: "Give to UJ", link: "#" },
    { id: 7, name: "Brand Shop", link: "#" },
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
    <nav>
      <div className="bg-[#1e0e47] md:flex pt-10 md:pt-0 md:items-center">
        <ul className="flex justify-center text-[10px] text-white mx-auto md:ml-[43%] md:justify-around md:text-[17px] md:font-semibold ">
          {links.map((link) => (
            <li className="mr-2 md:mr-0 hover:text-orange-500 " key={link.id}>
              <a href={link.link}>
                {link.name} <span>|</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="grid mt-10 place-content-center md:mt-0">
          <p className="text-white mb-5">
            <span className="text-[10px] mr-2">Brand Shop</span>
            <span className="text-2xl font-bold">Our Future. Reimagined.</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between  shadow-md md:mt-8   ">
        <div className="flex">
          <img
            className="h-[90px] ml-3 md:translate-x-6 md:size-[8rem] md:-mt-[5rem] md:ml-[8rem]"
            src="https://www.uj.ac.za/wp-content/uploads/2021/09/university-of-johannesburg-logo.png"
            alt="UJ Logo"
          />
        </div>
        <div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RxCross2 className="text-3xl font-bold text-black" />
            ) : (
              <RxHamburgerMenu className="text-3xl font-bold text-black mr-5 mt-9" />
            )}
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="md:flex md:justify-around md:text-2xl  md:text-black-200  font-thin">
              {Navlinks.map((Navlink) => (
                <li key={Navlink.id} className="mr-10 hover:text-orange-500">
                  <a href={Navlink.link}>{Navlink.name}</a>
                </li>
              ))}
              <div className="flex justify-around pr-[10rem]">
                <FaSearch className="text-3xl font-bold text-black hidden" />
                <RxHamburgerMenu className="text-3xl font-bold text-black ml-3 hidden" />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
