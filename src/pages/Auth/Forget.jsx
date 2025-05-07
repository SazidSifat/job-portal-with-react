import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link, useLocation } from 'react-router';


const Forget = () => {
    const [errMessage, setErrMessage] = useState(null)

    const { loading, setLoading, resetPassword } = useContext(AuthContext)
    const location = useLocation()
    const email = location.state


    useEffect(() => {
        document.title = "Forgot Password"
    }, [])




    const handleResetNow = (e) => {
        e.preventDefault()

        resetPassword(email).then(() => {
            window.open('https://mail.google.com', '_blank');
            setLoading(false)
        }).catch((err) => {
            if (err.code === "auth/missing-email") {
                setErrMessage("Missing Email")
                setLoading(false)
            }
        })

    }

    return (
        <div className='bg-[#f1f5f8] h-[80vh] py-6 lg:py-16 flex items-center justify-center  '>
            <div className='bg-white px-10 py-14 lg:px-20 lg:py-24 w-10/12 lg:w-4/12 rounded-lg space-y-6'>
                <p className='text-red-400 font-bold text-xl text-center'>{errMessage}</p>
                <h1 className='text-center text-3xl font-bold'>Reset Your Password!</h1>
                <form onSubmit={handleResetNow} action="" className='flex flex-col gap-6'>
                    <input type="email" name='email' defaultValue={email} placeholder='Email ' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <button type="submit" className='bg-primary text-white rounded-lg w-full p-4 border border-[#eaeff3] cursor-pointer hover:bg-accent hover:opacity-90'>{loading ? <span className="loading loading-bars loading-xm"></span> : 'Reset Now'}</button>
                </form>
                <hr className='text-gray-300' />

                <h1 className='text-lg text-center text-secondary font-semibold'>Go back to. <Link to='/auth/login' className='text-primary hover:underline'>Login</Link></h1>
            </div>
        </div>
    );
};

export default Forget;