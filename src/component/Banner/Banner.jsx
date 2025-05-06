import React from 'react';
import banner from '../../assets/image/side-banner.webp'
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row p-5 md:p-0 gap-3 lg:gap-0 items-center justify-between container mx-auto pt-20 md:pt-0'>
            <div className='space-y-8 flex-1'>
                <h4 className='text-3xl font-semibold text-accent'>Great Job Here</h4>
                <h1 className='text-4xl lg:text-6xl font-semibold text-secondary'>Discover & Find Your Dream Companies</h1>

                <div className='flex p-2 md:p-4 rounded-xl  items-center border-7 border-[#bfe7d6] bg-white'>
                    <CiSearch size={28} />
                    <input type="text" className=' rounded-sm pl-5 w-full py-2 focus:outline-0 text-start' placeholder='Skills, Keywords' />
                    <button className='bg-[#1ca774] btn py-6 px-10  cursor-pointer  text-white font-semibold  rounded-sm'>Find Job</button>
                </div>

            </div>
            <div className='flex-1  place-items-center'>
                <img src={banner} alt="" className='' />
            </div>
        </div>
    );
};

export default Banner;  