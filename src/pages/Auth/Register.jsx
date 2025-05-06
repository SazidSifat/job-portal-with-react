import React, { use, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const Register = () => {
    const [message, setMessage] = useState(null)
    const [errMessage, setErrMessage] = useState(null)

    const navigate = useNavigate()


    const { loading, signUpWithEmailPass } = use(AuthContext)


    const handleForm = (event) => {
        event.preventDefault();
        setErrMessage(null)

        console.log("hj");
        const name = event.target.name.value
        const image = event.target.image.value
        const email = event.target.email.value
        const password = event.target.password.value

        if (name && email && image && password) {
            if (password.length < 8) {
                setErrMessage("Password Must 8 Charecter long")
            } else {
                if (/(?=.*[a-z])/.test(password)) {
                    if (/(?=.*[A-Z])/.test(password)) {
                        if (/(?=.*\d)/.test(password)) {
                            if (/(?=.*[@#$%^&*!?.])/.test(password)) {
                                signUpWithEmailPass(email, password).then(() => {
                                    setMessage("Account Created Successfully! Redirectd...")
                                    setTimeout(() => {
                                        navigate('/')
                                    }, 2000);

                                }).catch(() => {
                                    setErrMessage("Failed to create account")
                                })
                            } else { setErrMessage("Must have 1 special character"); }
                        } else { setErrMessage("Must have 1 number"); }
                    } else { setErrMessage("Must have 1 uppercase letter"); }
                } else { setErrMessage("Must have 1 lowercase letter"); }
            }
        } else setErrMessage("All fields are required!");
    }

    return (
        <div className='bg-[#f1f5f8] h-[80vh] flex items-center justify-center  '>
            <div className='bg-white px-10 py-14 lg:px-20 lg:py-20 w-10/12 lg:w-4/12 rounded-lg space-y-6'>
                <h1 className='text-red-400 font-bold text-xl text-center'>{errMessage}</h1>
                <h1 className='text-green-400 font-bold text-xl text-center'>{message}</h1>
                <h1 className='text-center text-3xl font-bold'>Create an account! </h1>
                <form onSubmit={handleForm} action="" className='flex flex-col gap-6'>
                    <input type="text" placeholder='Name ' name='name' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="text" placeholder='Image Link ' name='image' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="email" placeholder='Email ' name='email' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="text" placeholder='Password ' name='password' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="submit" value={loading ? "loading..." : 'Register'} className='bg-primary text-white rounded-lg w-full p-4 border border-[#eaeff3] cursor-pointer hover:bg-accent hover:opacity-90' />
                </form>
                <hr className='text-gray-300' />
                <div>
                    <button type="submit" value='Login' className=' text-white rounded-lg w-full p-4 border  cursor-pointer hover:bg-red-400 hover:opacity-90 flex items-center justify-center gap-4 bg-red-400 text-lg' > <FaGoogle size={15} /><span>Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Register;