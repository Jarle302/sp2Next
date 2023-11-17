import Image from 'next/image';
import Link from 'next/link';


const Nav = () => {
    return (
        <header >
            <nav className='flex justify-between items-center px-8 py-2'>
                <Image className="rounded-xl" src="/eksamenlogo.png" width={100} height={93} alt="Logo" />
                <div><input className="rounded-2xl" type="text" name="searchBar" id="searchBar" /> <button></button></div>
                <ul className='flex gap-8 '>
                    <li> <Link href="./">Home</Link> </li>
                    <li><Link href="./about">About</Link></li>
                    <li><Link href="./contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav