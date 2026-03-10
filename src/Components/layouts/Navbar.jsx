import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import Navlink from '../Buttons/Navlink';



const Navbar = () => {

    return (
     <div className='bg-base-200'>
           <div className="navbar md:w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Navlink href={'/'}>Home</Navlink></li>
                    <li><Navlink href={'/products'}>Products</Navlink></li>
                    <li> <Navlink href={'/blog'}>Blog</Navlink></li>
                    <li><Navlink href={'/contact'}>Contact</Navlink></li>
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <Link href={'/cart'} className='btn btn-primary'>
                <LuShoppingCart />
                </Link>
                <Link href={"/login"}>
                <button className='btn btn-primary btn-outline'>Login</button>
                </Link>
            </div>
        </div>
     </div>
    );
};

export default Navbar;