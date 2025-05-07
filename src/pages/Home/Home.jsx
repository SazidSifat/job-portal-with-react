import React, { useEffect } from 'react';
import Banner from '../../component/Banner/Banner';
import HowItWorks from '../../component/HowItWorks/HowItWorks';
import TopCompanies from '../../component/TopCompanies/TopCompanies';

const Home = () => {

    useEffect(() => {
            document.title = "Job Track || Home"
        }, [])
    
    return (
        <div>
            <section className='bg-[#e8f6f1] h-[93vh]'>
                <Banner />
            </section>
            <section className='bg-[#f1f5f8]'>
                <HowItWorks/>
            </section>
            <section className='mt-6'>
                <TopCompanies/>
            </section>
        </div>

    );
};

export default Home;