import Image from 'next/image';


const Nav = () => {
    return (
        <header >
            <nav className='flex justify-between items-center px-8 py-2'>
                <Image className="rounded-xl" src="/eksamenlogo.png" width={100} height={93} alt="Logo" />
                <div><input className="rounded-2xl" type="text" name="searchBar" id="searchBar" /> <button></button></div>
                <ul className='flex gap-8 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav