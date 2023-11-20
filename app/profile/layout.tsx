"use client"


import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'
import path from "path";


const MemberLayout = ({ children }: { children: React.ReactNode }) => {
    const pathName:string = usePathname()
    
    const loginAktive:string = pathName === "/profile/login" ? "underline decoration-8 decoration-red-200	" : ""
    const registerAktive:string =  pathName ===  "/profile/register" ? "underline decoration-8	decoration-red-200" : ""
 return( <main className="bg max-w-[1300px] m-auto h-full p-[76px]">
    <Link className={`${loginAktive} p-3 w-[200px]  font-bold text-xl`} rel="stylesheet" href="/profile/login">
      Login
    </Link>
    <Link className={`${registerAktive} p-3 w-[200px]  font-bold text-xl`} rel="stylesheet" href="/profile/register">
      Register
    </Link>
    {children}
  </main>)
};

export default MemberLayout;
