import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    useEffect(() => {
        document.title = "Register Now"
    }, [])

    const [errMessage, setErrMessage] = useState(null)
    const location = useLocation()

    location.state = "/auth/register"

    console.log(location);

    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const { loading, setLoading, signUpWithEmailPass, signUpWithGoogle } = useContext(AuthContext)


    const handleForm = (event) => {
        event.preventDefault();
        setErrMessage(null)

        const name = event.target.name.value
        const image = event.target.image.value
        const email = event.target.email.value
        const password = event.target.password.value

        if (name && email && image && password) {
            if (password.length < 6) {
                setErrMessage("Password Must have at least 6 Charecter.")
            } else {
                if (!/(?=.*[a-z])/.test(password)) {
                    setErrMessage("Must have 1 lowercase letter");
                }
                else if (!/(?=.*[A-Z])/.test(password)) {
                    setErrMessage("Must have 1 uppercase letter");
                }
                else if (!/(?=.*\d)/.test(password)) {
                    setErrMessage("Must have 1 number");
                }
                else if (!/(?=.*[@#$%^&*!?.])/.test(password)) {
                    setErrMessage("Must have 1 special character");
                } else {
                    signUpWithEmailPass(email, password).then(() => {
                        navigate('/')
                    }).catch((err) => {
                        if (err.code === "auth/email-already-in-use") {
                            setErrMessage("Email Already Exist")

                        } else {
                            setErrMessage("Failed to create account")
                        }

                        setLoading(false)
                    })
                }

            }
        } else setErrMessage("All fields are required!");
    }

    const handleGoogle = () => {
        signUpWithGoogle(provider).then(() => {
            navigate('/')
        }
        ).catch(() => { setLoading(false) })
    }

    return (
        <div className='bg-[#f1f5f8] p-6 lg:py-16 flex items-center justify-center  '>
            <div className='bg-white px-10 py-14 lg:px-15 lg:py-15 w-10/12 lg:w-4/12 rounded-lg space-y-6'>
                <h1 className='text-red-400 font-bold text-lg text-center'>{errMessage}</h1>
                {/* <h1 className='text-green-400 font-bold text-xl text-center'>{message}</h1> */}
                <h1 className='text-center text-3xl font-bold'>Create an account! </h1>
                <form onSubmit={handleForm} action="" className='flex flex-col gap-6'>
                    <input type="text" placeholder='Name ' name='name' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="text" placeholder='Image Link ' name='image' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="email" placeholder='Email ' name='email' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="text" placeholder='Password ' name='password' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <button type="submit" className='bg-primary text-white rounded-lg w-full p-4 border border-[#eaeff3] cursor-pointer hover:bg-accent hover:opacity-90' >{loading ? <span className="loading loading-bars loading-xm"></span> : 'Register'}</button>
                </form>
                <hr className='text-gray-300' />
                <div>
                    <button onClick={handleGoogle} type="submit" value='Login' className=' text-white rounded-lg w-full p-4 border  cursor-pointer hover:bg-red-400 hover:opacity-90 flex items-center justify-center gap-4 bg-red-400 text-lg' >{loading ? <span className="loading loading-bars loading-xm"></span> : <><FaGoogle size={15} /><span>Google</span></>} </button>
                </div>
                <h1 className='text-lg text-center text-secondary font-semibold'>Already Have an Account. <Link to='/auth/login' className='text-primary'>Login</Link></h1>
            </div>
        </div>
    );
};

export default Register;