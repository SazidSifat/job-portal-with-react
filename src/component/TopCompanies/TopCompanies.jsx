import React from 'react';
import Company from '../Company/Company';
import { useLoaderData } from 'react-router';


const TopCompanies = () => {
    const cData = useLoaderData()
    // console.log( cData );
    return (
        <div className='p-16 space-y-9 container mx-auto'>

            <div className='space-y-2'>
                <h1 className='text-3xl text-center font-semibold text-secondary'>Broswe Top Companies</h1>
                <p className='text-center '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {/* <Company ></Company> */}
                {
                    cData.map(data=>(<Company key={data.id} data={data}/>))
                }


            </div>

        </div>
    );
};

export default TopCompanies;