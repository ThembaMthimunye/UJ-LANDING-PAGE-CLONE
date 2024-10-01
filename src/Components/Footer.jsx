import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="grid lg:grid-cols-3 justify-center text-white gap-[9rem] p-[5rem]">
        <div className="">
          <h1 className="font-semibold text-3xl">Contact Us</h1>
          <hr className="border-t-2 border-orange-600 w-[8rem] pb-10 mt-5 " />
          <div className="-mt-5 md:text-xl">
            <p className="flex items-center gap-4 ">
              <span>
                <FaLocationDot />
              </span>
              Directions& Map
            </p>
            <p className="flex items-center gap-4 ">
              <span>
                <BsTelephoneFill />
              </span>
              Tel: +27 11 559 4555
            </p>
            <p className="flex items-center gap-4 ">
              <span>
                <IoLogoWhatsapp />
              </span>
              +27 87 2406 854
            </p>
            <p className="flex items-center gap-4 ">
              {" "}
              <span>
                <MdEmail />
              </span>
              e-mail: mylife@uj.ac.za
            </p>
            <p className="flex items-center gap-4 ">
              <span>
                <IoPersonSharp />
              </span>
              Protection Services
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="font-semibold text-3xl">Quick Links</h1>
          <hr className="border-t-2 border-orange-600 w-[8rem] pb-10  mt-5 " />
          <div className="-mt-5">
            <p className="flex items-center ">Frequently Asked Questions</p>
            <p className="flex items-center ">UJ Whistleblowing Hotline</p>
            <p className="flex items-center ">Support Services</p>
            <p className="flex items-center "> Protection Services</p>
            <p className="flex items-center ">Vacancies</p>
            <p className="flex items-center ">Supply Chain Management</p>
            <p className="flex items-center ">Stakeholders Report</p>
            <p className="flex items-center ">View Quick Links</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold text-3xl">Connect to Us</h1>
          <hr className="border-t-2 border-orange-600 w-[8rem] pb-10  mt-5 " />
          <div className="grid grid-cols-4 lg:grid-cols-8 lg:gap-10 lg:text-2xl text-4xl gap-5">
            <MdEmail  className=" "/>
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedin />
            <FaYoutube />
            <FaSquareInstagram />
            <FaWhatsapp />
            <SiTiktok />
          </div>
        </div>
      </div>
      <div className="py-10 -my-[6rem]">
        <hr className="border-t-2 border-orange-600 w-[90%] pb-10  mt-5  mx-auto" />
        <p className="text-white text-center">
          © 2024 All Rights Reserved | University of Johannesburg | T&Cs
        </p>
        <p className="text-white text-center ">
          <span className="text-orange-400">Sign In</span> | POPIA and PAIA
        </p>
      </div>
    </div>
  );
};

export default Footer;
