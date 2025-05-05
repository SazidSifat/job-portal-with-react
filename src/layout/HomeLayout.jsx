import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const HomeLayout = () => {
    return (
        <>
            <header className='sticky top-0 bg-white transition ease-in-out duration-300'>
                <Navbar />

            </header>
            <main className=''>
                <Outlet />

            </main>
            <footer className='bg-base-200'>
                <Footer />
            </footer>
        </>
    );
};

export default HomeLayout;