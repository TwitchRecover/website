import { useRef, useState } from 'react';
import { Link } from "react-router-dom"
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import logo from "./logo.webp"

function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLUListElement>(null);
    
    
    return (
        <nav className="bg-gray-400 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Link to="/" onClick={()=>{setShowMobileNav(false)}}>
                        <img src={logo} alt="Icon" width="70px" height="70px" />
                    </Link>
                </div>

                {/*PC navbar*/}
                <div className="hidden md:flex">
                    <ul className="flex items-center space-x-5 font-semibold text-lg lg:text-xl text-black">
                        <li className='bg-gray-700 rounded-2xl p-3'>
                            <Link to="/">Download</Link>
                        </li>
                        <li>
                            <Link to="/">Tools</Link>
                        </li>
                        <li>
                            <Link to="/">Wiki</Link>
                        </li>
                        <li>
                            <Link to="/">Donate</Link>
                        </li>
                        <li>
                            <a href="https://github.com/TwitchRecover/TwitchRecover" target="_blank" rel="noopener noreferrer"><BsGithub size="2em" color="black"/></a>
                        </li>
                        <li>
                            <a href="https://discord.twitchrecover.com" target="_blank" rel="noopener noreferrer"><FaDiscord size="2em" color="black"/></a>
                        </li>
                    </ul>
                </div>
                {/*Mobile navbar*/}
                <div className="md:hidden flex items-center justify-center w-20" onClick={()=>setShowMobileNav(!showMobileNav)}>
                    { showMobileNav ? <IoClose size="3.2em" color="black"/>: <FaBars size="2em" color="black"/>}
                </div>
            </div>
        </div>
        {/*actaul dropdown menu*/}
        <div style={{height:`${showMobileNav ? ((dropdownRef.current?.clientHeight)?.toString()+"px") :"0px"}`}} className={`${showMobileNav ? "w-full transition-all ease-out duration-500 overflow-hidden md:hidden":"w-full transition-all ease-out duration-500 overflow-hidden md:hidden"}`}>
            <ul ref={dropdownRef} className="block font-semibold text-xl text-black px-16 pb-3">
                <li>
                    <Link to="/" onClick={()=>{setShowMobileNav(false)}}>Download</Link>
                </li>
                <li>
                    <Link to="/" onClick={()=>{setShowMobileNav(false)}}>Tools</Link>
                </li>
                <li>
                    <Link to="/" onClick={()=>{setShowMobileNav(false)}}>Wiki</Link>
                </li>
                <li>
                    <Link to="/" onClick={()=>{setShowMobileNav(false)}}>Donate</Link>
                </li>
                <li>
                    <a href="https://github.com/TwitchRecover/TwitchRecover" target="_blank" rel="noopener noreferrer" onClick={()=>{setShowMobileNav(false)}}><BsGithub size="1.4em" color="black"/></a>
                </li>
                <li>
                    <a href="https://discord.twitchrecover.com" target="_blank" rel="noopener noreferrer" onClick={()=>{setShowMobileNav(false)}}><FaDiscord size="1.4em" color="black"/></a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;