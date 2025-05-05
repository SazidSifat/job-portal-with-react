import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }



    return (
        <div className='container mx-auto py-4  flex items-center justify-between px-2 md:px-0  relative'>
            <div>
                <h1 className='text-3xl  font-bold'>JOB TRACK<span className='text-accent'>.</span></h1>
            </div>

            <div className='flex items-center justify-center gap-10'>
                <div className='hidden lg:block'>
                    <ul className='space-x-6'>
                        <NavLink to="/" className='hover:text-accent font-semibold'>Home</NavLink>
                        <NavLink to='/about' className='hover:text-accent font-semibold'>About</NavLink>
                        <NavLink to='/contact' className='hover:text-accent font-semibold'>Contact</NavLink>
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='space-x-4'>
                        <Link className='btn '>Login</Link>
                        <Link className='btn btn-primary'>Register</Link>
                    </div>
                    <div onClick={handleToggle} className='lg:hidden cursor-pointer'>
                        <HiMenuAlt3 size={28} />
                    </div>
                </div>
            </div>



            <div className={`absolute lg:hidden bg-[#061725] h-[1500px] w-[65%] ${toggle ? "top-0 left-0 duration-1000" : "top-0 -left-96 duration-1000"}`} >

                <div className='place-items-end p-6 border-[#24333f] border-x-0 border-t-0 w-full  border-b-1 '>
                    <div className='  p-1 rounded-sm bg-[#24333f]  cursor-pointer' onClick={handleToggle} >
                        <RxCross2 size={28} color='white ' />
                    </div>
                </div>

                <div>
                    <ul className='flex flex-col text-center items-center gap-2 text-white'>
                        <NavLink to="/" className='hover:text-accent font-semibold p-2  border-[#24333f] border-x-0 w-full border-t-0  border-b-1'>Home</NavLink>
                        <NavLink to='/about' className='hover:text-accent font-semibold p-2  border-[#24333f] border-x-0 border-t-0 w-full  border-b-1'>About</NavLink>
                        <NavLink to='/contact' className='hover:text-accent font-semibold p-2  border-[#24333f] border-x-0 w-full border-t-0  border-b-1'>Contact</NavLink>
                    </ul>

                </div>





            </div>


        </div>
    );
};

export default Navbar;
