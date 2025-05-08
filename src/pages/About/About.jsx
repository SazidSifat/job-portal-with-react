import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

const About = () => {

    useEffect(() => {
        document.title = "Job Track || About"
    }, [])
    return (
        <div className='p-3 md:p-0 space-y-6'>
            <Navbar />
            <div className='container mx-auto bg-[#01333f] space-y-3 px-6 py-20 rounded-2xl'>
                <h1 className='text-6xl font-semibold text-white '>Who We are <br />& Our Smart Mission</h1>
                <p className='text-white '>Job Track is a smart job-finding platform designed to help job seekers connect with the right opportunities quickly and easily. With intelligent tools, <br /> verified listings, and personalized support, we make your job search faster, smarter, and more effective.</p>
                <button className='px-8 py-4 bg-primary text-lg text-white rounded-lg'>Get In Touch </button>
            </div>

            <div className='container mx-auto p-10 bg-[#f1f5f8] rounded-lg'>
                <h1 className='text-3xl font-semibold t'>Who We are</h1>
                <p className='text-lg'> We are a passionate team of career experts, tech enthusiasts, and human resource professionals committed to transforming the way people find jobs. At Job Track, <br /> we bring together cutting-edge technology and real-world industry insights to help job seekers connect with meaningful employment opportunities across all fields.</p>
            </div>

            <div className='container mx-auto p-10 bg-[#f1f5f8] mb-10 rounded-lg'>
                <h1 className='text-3xl font-semibold t'>Our Smart Mission</h1>
                <p className='text-lg'> Our smart mission is simple:
                    To bridge the gap between talent and opportunity using intelligent technology, personalized tools, and trustworthy support. <br />
                    We aim to empower every job seeker with the resources they need to succeed — from AI-powered job matching and resume optimization to real-time alerts and career advice. <br /> With Job Track, finding the right job is no longer about luck — it’s about smart, strategic steps forward.</p>
            </div>
            <Footer />
        </div>
    );
};

export default About;