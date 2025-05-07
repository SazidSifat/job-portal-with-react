import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    useEffect(() => {
        document.title = "Login Now"
    }, [])

    const provider = new GoogleAuthProvider();

    const [errMessage, setErrMessage] = useState(null)
    const navigate = useNavigate()
    const emailRef = useRef("")


    const { loading, setLoading, logInWithPass, signUpWithGoogle } = useContext(AuthContext)

    const handleForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        if (email && password) {
            logInWithPass(email, password).then(() => {
                navigate('/')
            }).catch((err) => {
                console.log(err.code);

                if (err.code === "auth/invalid-credential") {
                    setErrMessage("Invalid Credential");
                    setLoading(false)

                }

            })
        } else setErrMessage("All fields are required!");
    }


    const handleReset = () => {
        const emailVal = emailRef.current.value
        console.log(emailVal);
        navigate("/auth/forget", { state: emailVal })
    }
    const handleGoogle = () => {
        signUpWithGoogle(provider).then(() => {
            navigate('/')
        }
        ).catch(() => { setLoading(false) })
    }


    return (
        <div className='bg-[#f1f5f8] h-[80vh] py-6 lg:py-16 flex items-center justify-center  '>
            <div className='bg-white px-10 py-14 lg:px-20 lg:py-24 w-10/12 lg:w-4/12 rounded-lg space-y-6'>
                <p className='text-red-400 font-bold text-xl text-center'>{errMessage}</p>

                <h1 className='text-center text-3xl font-bold'>Login Now!</h1>
                <form onSubmit={handleForm} action="" className='flex flex-col gap-6'>
                    <input type="email" ref={emailRef} name='email' placeholder='Email ' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="password" name='password' placeholder='Password ' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <div className='space-y-1'>
                        <button type="submit" className='bg-primary text-white rounded-lg w-full p-4 border border-[#eaeff3] cursor-pointer hover:bg-accent hover:opacity-90' >{loading ? <span className="loading loading-bars loading-xm"></span> : 'Login'}</button>
                        <p onClick={handleReset} className='text-end cursor-pointer w-full text-secondary font-bold hover:underline hover:text-primary'>Forget Password ?</p>
                    </div>
                </form>
                <hr className='text-gray-300' />
                <div>
                    <button onClick={handleGoogle} type="submit" value='Login' className=' text-white rounded-lg w-full p-4 border  cursor-pointer hover:bg-red-400 hover:opacity-90 flex items-center justify-center gap-4 bg-red-400 text-lg' > {loading ? <span className="loading loading-bars loading-xm"></span> : <><FaGoogle size={15} /><span>Google</span></>} </button>
                </div>
                <h1 className='text-lg text-center text-secondary font-semibold'>Don't have account. <Link to='/auth/register' className='text-primary hover:underline'>Register</Link></h1>
            </div>
        </div>
    );
};

export default Login;