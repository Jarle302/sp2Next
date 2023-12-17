"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { UserAccount } from "./ContextContainer";
import { GiChest, GiHamburgerMenu } from "react-icons/gi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";


import { NavContext } from "./NavProvider";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userAccount, setUserAccount } = useContext(UserAccount);
  const { navState, setNavState } = useContext(NavContext);

  useEffect(() => {
    userAccount.name ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [userAccount]);
  return (
    <header className=" fixed md:static w-full h-[74px] bg-gray-600 z-20 text-orange-100">
      <nav className="flex justify-between items-center px-8 py-2  md:static">
        <Link href="/" aria-label="Home">
          {" "}
          <span className="text-orange-100 text-[4rem]">
            <GiChest />
          </span>
        </Link>
        <ul className="flex gap-[20px]">
          {" "}
          {!isLoggedIn ? (
            <li>
              <Link
                className={" w-[200px]  font-bold text-xl hover:bg-red-200"}
                href="/profile/auth/login">
                Login
              </Link>
              /
              <Link
                className={" w-[200px]  font-bold text-xl hover:bg-red-200"}
                href="/profile/auth/register">
                Register
              </Link>
            </li>
          ) : (
            <>
              <li className="self-center">
                <span className="flex items-center font-bold text-[1rem] text-green-200 flex">
                  {userAccount.credits}
                  <HiMiniCurrencyDollar />
                </span>
              </li>
              <li className="px-[13px] py-[2px] rounded-[8px] bg-orange-100 text-gray-600 font-bold text-[1rem] hover:bg-red-200">
                <Link href={`/profile/${userAccount.name}`}>
                  {userAccount.name}
                </Link>
              </li>
            </>
          )}
          {navState.isSmallScreen && (
           <li> <button
              onClick={() =>
                setNavState((prev) => ({ ...prev, isVisible: !prev.isVisible }))
              }>
              <GiHamburgerMenu />
            </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
