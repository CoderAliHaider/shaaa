"use client";
import React, { useEffect, useState } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const HeaderComponent = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 px-5 md:px-8 left-0 w-full h-[70px] flex justify-between items-center z-40 bg-white transition-transform duration-500 lg:flex ${
        showHeader ? "translate-y-0" : "translate-y-[-100px]"
      }`}
    >
      <div>
        <Image
          src="/images/shaaa_logo.png"
          width={89}
          height={46}
          alt="Logo"
          className="w-[79px] h-[36px] md:w-[89px] md:h-[46px]"
        />
      </div>
      <div className="flex items-center md:text-[12px] lg:text-[14px] font-light text-[#414042] gap-1">
        <span>
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <select className="bg-transparent appearance-none outline-none border-0 md:text-[12px] lg:text-[14px] font-medium text-[#3C2013]">
          <option>EN</option>
          <option>العربية</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderComponent;
