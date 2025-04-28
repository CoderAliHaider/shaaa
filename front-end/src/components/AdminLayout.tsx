"use client";
import React, { useState } from "react";
import Header from "../components/AdminComponents/Header";
import SideBar from "../components/AdminComponents/SideBar";
import classNames from "classnames";
// import Sidebar or other components if needed

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const HandleToggle = () => {
    setToggle(toggle ? false : true);
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header    
        toggle={toggle}
        setToggle={setToggle}
        handleToggle={HandleToggle} />
        <div className="flex ">
          <div>
          <SideBar toggle={toggle} handleToggle={HandleToggle} />
          </div>
<div className={classNames([
            "children ease-in-out duration-300 w-full min-h-[100vh] p-4 md:p-8 !mt-[64px] overflow-hidden",
            toggle ? "ml-[50px]" : "!ml-[220px]",
          ])}>{children}</div>
        </div>
      
    </div>
  );
};

export default AdminLayout;
