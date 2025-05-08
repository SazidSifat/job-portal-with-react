import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const UpdateUser = () => {
    const [errMessage, setErrMessage] = useState(null)
    const { setLoading, loading, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()



    const handleUpdate = (e) => {



        e.preventDefault()

        console.log("data");

        const name = e.target.name.value
        const image = e.target.image.value

        if (!name && !image) {
            setErrMessage("Name and Image field Required")

        }
        else {
            updateUser({ displayName: name, photoURL: image }).then(() => {
                setLoading(false)
                navigate('/profile')

            }).catch(() => {
                setErrMessage("Update Error")
            })

        }

    }
    return (
        <div className='flex items-center justify-center p-10'>
            <div className='bg-white px-6 py-14 lg:px-15 lg:py-15 w-11/12 lg:w-4/12 rounded-lg space-y-6 relative'>
                <p className='text-red-400 font-bold text-lg text-center'>{errMessage}</p>

                <h1 className='text-center text-2xl md:text-3xl font-bold'>Update Profile! </h1>

                <form onSubmit={handleUpdate} action="" className='flex flex-col gap-6'>
                    <input type="text" placeholder='Name ' name='name' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <input type="text" placeholder='Image Link ' name='image' className='w-full rounded-lg p-4 border border-[#eaeff3]' />
                    <button type="submit" className='bg-primary text-white rounded-lg w-full p-4 border border-[#eaeff3] cursor-pointer hover:bg-accent hover:opacity-90' >{loading ? <span className="loading loading-bars loading-xm"></span> : 'Update Profile'}</button>
                </form>



            </div>

        </div>
    );
};

export default UpdateUser;