"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { UserAccount } from "./ContextContainer";
import { GiChest } from "react-icons/gi";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userAccount, setUserAccount } = useContext(UserAccount);

  useEffect(() => {
    userAccount.name ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [userAccount]);
  return (
    <header className=" fixed md:static w-full h-[74px] bg-gray-600 z-20 text-orange-100">
      <nav className="flex justify-between items-center px-8 py-2 fixed md:static">
        <Link href="/">
          {" "}
          <Image
            className="rounded-xl"
            src="/eksamenlogo.png"
            width={60}
            height={93}
            alt="Logo"
          />
        </Link>
        <ul>
          {" "}
          {!isLoggedIn ? (
            <li>
              <Link
                className={" w-[200px]  font-bold text-xl"}
                href="/profile/auth/login">
                Login
              </Link>
              /
              <Link
                className={" w-[200px]  font-bold text-xl"}
                href="/profile/auth/register">
                Register
              </Link>
            </li>
          ) : (
            <li>
              {" "}
              <span className="font-bold text-2xl text-green-200 flex">
                {" "}
                <GiChest />
                {userAccount.credits}
              </span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
