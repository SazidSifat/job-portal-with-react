import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
    return (
        <div className='p-10 '>
            <footer className="container mx-auto footer footer-horizontal footer-center  text-base-content rounded p-10">
                <ul className='space-x-6 flex '>
                    <NavLink to="/" className='hover:text-accent font-semibold  text-whit'>Home</NavLink>
                    <NavLink to='/about' className='hover:text-accent font-semibold text-whit'>About</NavLink>
                    <NavLink to='/contact' className='hover:text-accent font-semibold text-whit'>Contact</NavLink>
                </ul>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://facebook.com'  target='blank'>
                            <FaFacebook  size={30} />
                        </a>
                        <a href='https://youtube.com'  target='blank'>
                            <FaYoutube size={30} />
                        </a>
                        <a href='https://x.com'  target='blank'>
                            <RiTwitterXLine size={30} />
                        </a>

                    </div>
                </nav>
                <aside>
                    <p className='text-whit'>Copyright © {new Date().getFullYear()} - All right reserved by Job Track.</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;