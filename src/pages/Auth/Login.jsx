import React, { use, useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Login = () => {

    const { logInWithPass } = useContext(AuthContext)



    const handleForm = (e) => {
        e.preventDefault()


        const email = e.target.email.value
        const password = e.target.password.value

        logInWithPass(email, password).then((res) => {
            console.log( res );

        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <div className='bg-[#f1f5f8] h-[80vh] flex items-center justify-center  '>
            <div className='bg-white px-10 py-14 lg:px-20 lg:py-24 w-10/12 lg:w-4/12 rounded-lg space-y-6'>
                <h1 className='text-center text-3xl font-bold'>Login Now!</h1>
                <form onSubmit={handleForm} action="" className='flex flex-col gap-6'>
                    <input type="email" name='email' placeholder='Email ' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="password" name='password' placeholder='Password ' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="submit" value='Login' className='bg-primary text-white rounded-lg w-full p-4 border border-[#eaeff3] cursor-pointer hover:bg-accent hover:opacity-90' />
                </form>
                <hr className='text-gray-300' />
                <div>
                    <button type="submit" value='Login' className=' text-white rounded-lg w-full p-4 border  cursor-pointer hover:bg-red-400 hover:opacity-90 flex items-center justify-center gap-4 bg-red-400 text-lg' > <FaGoogle size={15} /><span>Google</span></button>

                </div>
            </div>
        </div>
    );
};

export default Login;