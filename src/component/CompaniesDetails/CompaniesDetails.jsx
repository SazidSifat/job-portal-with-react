import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Jobs from '../Jobs/Jobs';

const CompaniesDetails = () => {

       useEffect(() => {
                document.title = "Company Details"
            }, [])
    const { id } = useParams()
    const data = useLoaderData()

    const singleData = data.find(d => d.id === id)

    const { name, location, industry, website, logo, jobs } = singleData

    const web = website.slice(8, 100)

    return (
        <div className='container mx-auto py-6  '>
            <div className='px-2 md:px-0'>
                <div className=' p-4 lg:p-10 flex items-center justify-between bg-[#e8f6f1] rounded-xl'>
                    <div className='text-wh space-y-2'>
                        <div className='flex flex-col gap-2 items-start'>
                            <span className='py-1 font-semibold  px-3 text-accent bg-base-200 rounded-sm'>{industry}</span>
                            <h1 className='text-3xl lg:text-4xl font-semibold text-secondary'>{name}</h1>
                        </div>
                        <h1 className='text-lg flex items-center  gap-1'><CiLocationOn />{location}</h1>
                        <a href={website} target='_blank' className='hover:underline font-medium'>{web}</a>
                    </div>
                    <div className='flex items-center justify-end  rounded-2xl'>
                        <img src={logo} alt="" className='lg:w-9/12' />
                    </div>

                </div>
            </div>


            <div className='mt-10 space-y-10'>
                <h1 className='text-3xl lg:text-3xl font-semibold text-secondary pl-5 md:pl-0'>Job For this Company</h1>
                <div className='space-y-6 p-4'>
                    {
                        jobs.map(job  => <Jobs key={job.id} singleData={singleData} job={job} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CompaniesDetails;