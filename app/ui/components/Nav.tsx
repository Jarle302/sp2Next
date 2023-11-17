"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const Nav = () => {
    const pathName = usePathname()
    return (
        <header >
            <nav className='flex justify-between items-center px-8 py-2'>
                <Image className="rounded-xl" src="/eksamenlogo.png" width={100} height={93} alt="Logo" />
                <div><input className="rounded-2xl" type="text" name="searchBar" id="searchBar" /> <button></button></div>
                <ul className='flex gap-8 '>
                    <li className={pathName === "/" ? "bg-red-200" : ""}> <Link href="./">Home</Link> </li>
                    <li className={pathName === "/about" ? "bg-red-200" : ""}><Link href="./about">About</Link></li>
                    <li className={pathName === "/contact" ? "bg-red-200" : ""}><Link href="./contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav