"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt, faCog, faBars } from "@fortawesome/free-solid-svg-icons";


const AdminHeader: React.FC<{
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
}> = ({ toggle, setToggle, handleToggle }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);



  return (
    <header
      className=" fixed  w-full bg-white z-50 transition-all duration-300" 
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
        
        <button className="close_btn mr-6" >
        <FontAwesomeIcon icon={faBars} onClick={handleToggle}  />
                </button>
          <Image src="/images/primary_logo.png" alt="Admin Logo" width={50} height={50} />
          <span className="text-xl font-bold text-gray-800">Admin Dashboard</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
          <a href="/admin/dashboard" className="hover:text-red-500">Dashboard</a>
          <a href="/admin/users" className="hover:text-red-500">Users</a>
          <a href="/admin/orders" className="hover:text-red-500">Orders</a>
          <a href="/admin/products" className="hover:text-red-500">Products</a>
        </nav>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-gray-700 font-semibold hover:text-red-500"
          >
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            <span className="hidden sm:inline">Admin</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
              <a
                href="/admin/settings"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faCog} />
                Settings
              </a>
              <a
                href="/logout"
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
