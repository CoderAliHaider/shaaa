import React from "react";

const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#FEF1DE]">
      <h1 className="text-2xl font-bold text-[#3C2013]">Golden Brown</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-[#3C2013] hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#3C2013] hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#cookies" className="text-[#3C2013] hover:underline">
              Cookies
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#3C2013] hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;