import React from 'react';

const Subscribe = () => {
    return (
        <div className='p-20 place-items-center  bg-[#01333f] text-white  '>
            <div className='max-w-[700px] space-y-6'>
                <div className='text-center space-y-3'>
                    <h1 className='text-3xl font-semibold'>Are You Already Working With Us?</h1>
                    <p>Welcome back! If you're already part of the Job Track community, you're on the right path to discovering  better career opportunities. </p>
                </div>

                <div className='flex p-2 md:p-4 w-full rounded-xl  items-center border-2 border-[#bfe7d6]'>
                    <input type="text" className=' rounded-sm pl-5 w-full py-2 focus:outline-0 text-start' placeholder='Enter Email' />
                    <button className='bg-[#1ca774] btn py-6 px-10  cursor-pointer  text-white font-semibold  rounded-sm'>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;