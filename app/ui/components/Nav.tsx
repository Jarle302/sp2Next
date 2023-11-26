"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState,useEffect } from "react"
import useLocalStorage from '@/app/utils/customHooks/useLocalStorage';

const Nav = () => {
const profile =  useLocalStorage("profile")    
   
    const [hidden, setHidden] = useState(true)
    let hiddenClass = hidden ? "hidden" : ""
    const pathName = usePathname()
    const [isLoggedIn, setIsLoggedIn] = useState(!!profile)

    return (
        <header className=" fixed md:static w-full h-[74px] bg-gray-600 z-20 text-orange-100">
            <nav className='flex justify-between items-center px-8 py-2 fixed md:static'>
                <Link href="/"> <Image className="rounded-xl" src="/eksamenlogo.png" width={60} height={93} alt="Logo" /></Link>
                <div><input className="rounded-2xl" type="text" name="searchBar" id="searchBar" /> <button></button></div>
                <ul className={`${hiddenClass} md:flex gap-8  `}>
                    <li className={pathName === "/" ? "bg-red-200" : ""}> <Link href="/">Home</Link> </li>
                    <li className={pathName === "/about" ? "bg-red-200" : ""}><Link href="/about">About</Link></li>
                    <li className={pathName === "/contact" ? "bg-red-200" : ""}><Link href="/contact">Contact</Link></li>
                    {!isLoggedIn? <li className={pathName === "/profile/auth/login" ? "bg-red-200" : ""}><Link href="/profile/auth/login">Login</Link></li>: <button onClick={()=>{localStorage.removeItem("profile"); setIsLoggedIn(prev =>!prev)}}>Logout ({profile.name})</button>}
                </ul>
                <button onClick={() => {
                    setHidden(prev => !prev)
                }} className="md:hidden"><RxHamburgerMenu /></button>
            </nav>
        </header >
    )
}

export default Nav