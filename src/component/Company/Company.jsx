import React from 'react';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import * as motion from "motion/react-client"



const Company = ({ data }) => {
    const { id, logo, name, industry, location } = data
    return (
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className='place-items-center text-center p-8 border-2 rounded-xl border-[#eff1f3]'>
            <Link to={`/company/${id}`} >
                <div className='flex items-center justify-center ' >
                    <img src={logo} alt="" className='w-[100px] h-[100px]' />
                </div>
                <h4 className='text-sm '>{industry}</h4>
                <h1 className='text-lg font-bold'>{name}</h1>
                <p className='text-sm flex items-center justify-center gap-1'> <CiLocationOn />{location}</p>
            </Link>
        </motion.div>
    );
};

export default Company;