import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import error from '../../assets/image/404.webp'
import { Link } from 'react-router';
import Footer from '../../component/Footer/Footer';


const Error = () => {
      useEffect(() => {
            document.title = "Page Not Found"
        }, [])
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-10 items-center justify-center h-[80vh]'>
                <img src={error} alt="" className='w-[20%]' />

                <Link to="/" className='btn btn-primary'> Back to home</Link>

            </div>
            <Footer />

        </>
    );
};

export default Error;