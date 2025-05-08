import React from 'react';
import * as motion from "motion/react-client"

const HowItWorks = () => {
    return (
        <div className='container mx-auto p-20 space-y-8 ' >
            <div className='space-y-2'>
                <h1 className='text-secondary text-center text-3xl font-semibold'>How It Works.</h1>
                <p className='text-center text-secondary'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
            </div>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                    <div className='bg-white p-8 rounded-xl space-y-2'>
                        <h1 className='text-5xl font-bold text-accent'>01.</h1>
                        <h2 className='text-2xl text-secondary font-medium'>Create An Account</h2>
                        <p className='text-secondary text-sm'>Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best. Nor again is there anyone who loves.</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}>
                    <div className='bg-white p-8 rounded-xl space-y-2'>
                        <h1 className='text-5xl font-bold text-accent'>02.</h1>
                        <h2 className='text-2xl text-secondary font-medium'>Search Jobs</h2>
                        <p className='text-secondary text-sm'>Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best. Nor again is there anyone who loves.</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.8 }}>
                      <div className='bg-white p-8 rounded-xl space-y-2'>
                    <h1 className='text-5xl font-bold text-accent'>03.</h1>
                    <h2 className='text-2xl text-secondary font-medium'>Save & Apply Jobs</h2>
                    <p className='text-secondary text-sm'>Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best. Nor again is there anyone who loves.</p>
                </div>
                </motion.div>










            </div>

        </div>
    );
};

export default HowItWorks;