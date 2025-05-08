import React from 'react';
import * as motion from "motion/react-client"


const WhatclientSay = () => {
    return (
        <div className='bg-[#e8f6f1] p-20'>
            <div className='container mx-auto place-items-center space-y-6'>

                <div className='text-center'>
                    <h1 className='text-3xl font-semibold'>What Our Clients Says</h1>
                    <p>Don't just take our word for it — hear directly from the people we've helped</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-3 md:p-0'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>

                        <div className='p-10 bg-white rounded-lg space-y-3'>
                            <h1><i>"I landed my dream job within weeks. The platform is easy to use and filled with opportunities!"</i> </h1>
                            <p className='text-end'>— Anika Rahman, Marketing Executive</p>
                        </div>

                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>

                        <div className='p-10 bg-white rounded-lg space-y-3'>
                            <h1><i>"As a recruiter, I found the perfect candidates faster than ever. The support and reach are truly impressive."</i> </h1>
                            <p className='text-end'>— Md. Hasan Ali, HR Manager</p>
                        </div>

                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>

                        <div className='p-10 bg-white rounded-lg space-y-3'>
                            <h1><i>"I loved how personalized the job suggestions were. It felt like the site actually understood what I was looking for."</i> </h1>
                            <p className='text-end'>— Tanvir Hossain, Software Developer</p>
                        </div>

                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default WhatclientSay;