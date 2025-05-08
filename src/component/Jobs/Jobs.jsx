import React, { useContext, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { AnimatePresence, motion } from "motion/react"
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Jobs = ({ job, singleData }) => {

    const [selectedItem, setSelectedItem] = useState(null)

    

    const { loading } = useContext(AuthContext)


    const { jobType, title, location, salary } = job

    if (loading) {
        return (
            <h1>Loading......</h1>
        )
    }
    return (
        <div >
            <div className='flex items-center justify-between px-2 md:px-10 py-4 rounded-lg border-2 border-[#f5f6f7] '>
                <div className='md:space-y-3 flex-1'>
                    <div className='flex  flex-col items-start gap-2'>
                        <span className='py-1 font-semibold  px-3 text-accent bg-base-200 rounded-sm'>{jobType}</span>
                        <h1 className='text-xl lg:text-2xl font-semibold text-secondary'>{title}</h1>
                    </div>
                    <h1 className='md:text-lg flex items-center  gap-1'><CiLocationOn />{location}</h1>
                </div>
                <div className='flex-1'>
                    <p className='flex md:text-lg items-center gap-2'><FaBangladeshiTakaSign size={30} />{salary}</p>
                </div>
                <div className=''>
                    <button onClick={() => setSelectedItem(job)} className='px-6 py-2 md:px-8 md:py-4 cursor-pointer bg-primary md:text-lg text-white rounded-lg'>
                        Details
                    </button>
                </div>
            </div>



            <AnimatePresence>
                {selectedItem && <motion.div initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    key="box"
                    className='fixed inset-0 p-6 drop-shadow-4xl bg-[#00000080] flex items-center justify-center z-50'>
                    <div >
                        <div className='bg-white p-10 rounded-lg space-y-3'>
                            <div className='flex flex-col gap-2 items-start'>
                                <span className='py-1 font-semibold  px-3 text-accent bg-base-200 rounded-sm'>{selectedItem.jobType}</span>
                                <h1 className='text-4xl font-semibold'>{selectedItem.title}</h1>
                            </div>
                            <p>{selectedItem.description}</p>

                            <h1 className='text-lg flex items-center  gap-1'><CiLocationOn />{selectedItem.location} </h1>

                            <p className='flex text-xl font-semibold items-center gap-2'><FaBangladeshiTakaSign size={25} />{selectedItem.salary}</p>

                            <h2>
                                <p className='text-lg font-medium'>Requirements</p>
                                <ol className='list-decimal px-8' >
                                    {
                                        selectedItem.requirements.map((req, index) => <li key={index}>{req}</li>)
                                    }
                                </ol>
                            </h2>

                            <div className='w-full flex gap-6'>
                                <button onClick={() => setSelectedItem(null)} className='px-6 py-2 md:px-8 md:py-4 cursor-pointer bg-primary md:text-lg text-white rounded-lg flex-1'>
                                    Close
                                </button>
                                <a href={singleData.website} target='_blank' className='px-6 py-2 md:px-8 md:py-4 cursor-pointer bg-primary md:text-lg text-white rounded-lg flex-1 text-center'>
                                    Apply
                                </a>

                            </div>

                        </div>
                    </div>

                </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};

export default Jobs;