"use client";
import React, {useState } from "react";
import {
  faBars,
  faGlobe,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const HeaderComponent = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <div className="lg:hidden  md:flex   w-full xs:flex flex-col items-center justify-between z-40">
        <div className="h-[40px] w-full bg-white justify-between flex px-10 border-b border-gray-200 items-center text-[16px] font-bold text-[#3C2013]">
          <span className="text-[12px] sm:text-base font-semibold">
            <FontAwesomeIcon icon={faPhone} /> +92 300 1234567
          </span>

          <div className="flex items-center rounded px-2 py-1 gap-2 ">
            <span className="text-sm sm:text-base font-semibold">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <select className="bg-transparent text-sm sm:text-base text-[12px] outline-none border-0  font-bold text-[#3C2013]">
              <option className="text-[12px]">EN</option>
              <option className="text-[12px]">اردو</option>
              <option className="text-[12px]">العربية</option>
            </select>
          </div>
        </div>

        <div className="h-[100px] w-full flex items-center justify-between px-10 bg-white transition-all duration-200">
          <div className="mr-[100px] md:mr-48">
            <Image
              src="/images/primary_logo.png"
              width={65}
              height={65}
              alt="Logo"
            />
          </div>
          <div className="text-2xl" onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white lg:hidden z-[50] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col  gap-3.5 text-[#3C2013] text-sm sm:text-base font-semibold">
        <div className="flex items-start justify-between mb-4 ">
        <div>
              <Image
                src="/images/secondrylogo.png"
                width={80}
                height={70}
                alt="Logo"
              />
            </div>
          <button
            className="self-end text-xl mb-12"
            onClick={() => setMenuOpen(false)}
          >
          
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
          <a href="#" className="block w-full px-4 py-2 rounded-md border-b border-gray-200 hover:bg-red-100 transition duration-200
">
            About Us
          </a>
          <a href="#" className="block w-full px-4 py-2 rounded-md border-b border-gray-200 hover:bg-red-100 transition duration-200">
            Cookie Collection
          </a>
          <a href="#" className="block w-full px-4 py-2 rounded-md border-b border-gray-200 hover:bg-red-100 transition duration-200">
            Order Online
          </a>
          <a href="#" className="block w-full px-4 py-2 rounded-md border-b border-gray-200 hover:bg-red-100 transition duration-200">
            Find Store
          </a>
          <a href="#" className="block w-full px-4 py-2 rounded-md border-b border-gray-200 hover:bg-red-100 transition duration-200">
            Contact Us
          </a>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* HEADER FOR LARGER SCREENS */}

    
    </>
  );
};

export default HeaderComponent;
