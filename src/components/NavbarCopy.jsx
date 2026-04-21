import React, { useState } from 'react';
import Link from './Link';
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarCopy = () => {

    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/contact", name: "Contact" },
        { id: 6, path: "*", name: "Not Found" }
    ];

    return (
        <nav className='text-black bg-yellow-200 p-6'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true? <AiOutlineClose className='text-2xl' /> : <HiMenuAlt1 className='text-2xl' />
                }
                
            </div>
            
            <ul className={`md:flex duration-1000 absolute md:static
                ${
                    open? "left-10" : "-left-60"
                } bg-yellow-100 px-8 py-3 shadow-lg md:shadow-none mt-2`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default NavbarCopy;