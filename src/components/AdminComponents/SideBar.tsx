"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

interface SideBarProps {
  toggle: boolean;
  handleToggle: () => void;
}

const SideBarComponent: React.FC<SideBarProps> = ({ toggle }) => {
  const pathname = usePathname();

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 pt-36 h-screen overflow-hidden bg-[#EDD0B7] text-themeYellow transition-all duration-300 ease-in-out shadow-md",
        toggle ? "w-[60px]" : "w-[220px]"
      )}
    >
      <ul className="flex flex-col gap-2 px-1">
        <li>
          <Link
            href="/dashboard"
            className={classNames(
              "flex items-center gap-3 px-4 py-2 font-semibold rounded-md group hover:bg-themeYellow hover:text-white transition-all duration-200",
              pathname === "/dashboard" && "bg-themeYellow text-white"
            )}
          >
            <FontAwesomeIcon icon={faHome} />
            <span
              className={classNames(
                "transition-all duration-300",
                toggle ? "opacity-0 w-0" : "opacity-100 w-auto"
              )}
            >
              Dashboard
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/profile"
            className={classNames(
              "flex items-center gap-3 px-4 py-2 font-semibold rounded-md group hover:bg-themeYellow hover:text-white transition-all duration-200",
              pathname === "/profile" && "bg-themeYellow text-white"
            )}
          >
            <FontAwesomeIcon icon={faUser} />
            <span
              className={classNames(
                "transition-all duration-300",
                toggle ? "opacity-0 w-0" : "opacity-100 w-auto"
              )}
            >
              Profile
            </span>
          </Link>
        </li>

      

        <li>
          <Link
            href="/settings"
            className={classNames(
              "flex items-center gap-3 px-4 py-2 font-semibold rounded-md group hover:bg-themeYellow hover:text-white transition-all duration-200",
              pathname === "/settings" && "bg-themeYellow text-white"
            )}
          >
            <FontAwesomeIcon icon={faCog} />
            <span
              className={classNames(
                "transition-all duration-300",
                toggle ? "opacity-0 w-0" : "opacity-100 w-auto"
              )}
            >
              General
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarComponent;
