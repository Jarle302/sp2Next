"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { NavContext } from "./NavProvider";
import Searchbar from "./Searchbar";
import LogoutButton from "./LogoutButton";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

const SideNav = () => {
  const { navState, setNavState } = useContext(NavContext);
  const pathName = usePathname();

  function closeNav(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (navState.isSmallScreen) {
      setNavState({ ...navState, isVisible: !navState.isVisible });
    }
  }

  return (
    <>
      {navState.isVisible && (
        <aside className="gap-[40px] w-[267px]  z-40 top-[74px] absolute h-full md:static flex md:w-full md:w-[245px] bg-gray-600 text-orange-100 flex-col pt-[40px] items-center ">
          <Searchbar />
          <ul className="flex flex-col gap-[15px] ">
            <li
              className={
                pathName === "/"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              {" "}
              <Link onClick={closeNav} className="flex gap-2" href="/">
                <FaHome className="text-[2rem]" /> Home
              </Link>{" "}
            </li>

            <li
              className={
                pathName === "/listings/create"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              <Link
                onClick={closeNav}
                className="flex gap-2"
                href="/listings/create">
                <RiAuctionFill className="text-[2rem]" /> New Listing
              </Link>
            </li>
            <li
              className={
                pathName === "/about"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              <Link onClick={closeNav} className="flex gap-2" href="/about">
                <BsFillPeopleFill className="text-[2rem]" /> About
              </Link>
            </li>
            <li
              className={
                pathName === "/contact"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              <Link onClick={closeNav} className="flex gap-2" href="/contact">
                <MdEmail className="text-[2rem]" /> Contact
              </Link>
            </li>
          </ul>
          <LogoutButton>
            <MdOutlineLogout />
            Logout
          </LogoutButton>
        </aside>
      )}
    </>
  );
};

export default SideNav;
