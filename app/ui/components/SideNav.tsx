"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { NavContext } from "./NavProvider";
import Searchbar from "./Searchbar";
import LogoutButton from "./LogoutButton";

const SideNav = () => {
  const { navState, setNavState } = useContext(NavContext);
  const pathName = usePathname();
  return (
    <>
      {navState.isVisible && (
        <aside className="gap-[40px] z-10 top-[74px] absolute h-full md:static flex w-full md:w-[239px] bg-gray-600 text-orange-100 flex-col pt-[40px] items-center ">
          <Searchbar />
          <ul className="flex flex-col gap-[35px] ">
            <li
              className={
                pathName === "/"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              {" "}
              <Link href="/">Home</Link>{" "}
            </li>

            <li>
              <Link
                className={
                  pathName === "/listings/create"
                    ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                    : " w-[200px]  font-bold text-xl"
                }
                href="/listings/create">
                Create new listing
              </Link>
            </li>
            <li
              className={
                pathName === "/about"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              <Link href="/about">About</Link>
            </li>
            <li
              className={
                pathName === "/contact"
                  ? "underline decoration-8 decoration-red-200	  w-[200px]  font-bold text-xl"
                  : " w-[200px]  font-bold text-xl"
              }>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <LogoutButton>Logout</LogoutButton>
        </aside>
      )}
    </>
  );
};

export default SideNav;
