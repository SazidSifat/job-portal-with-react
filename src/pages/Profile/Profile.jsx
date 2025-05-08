import React, { useContext, useEffect} from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaEdit } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router';


const Profile = () => {

     useEffect(() => {
                document.title = "User Profile"
            }, [])
    const { user, } = useContext(AuthContext)



    return (
        <div>
            <div className=' bg-[#f1f5f8] my-4'>
                <div className=' container mx-auto py-20 px-4 md:px-0 flex flex-col md:flex-row items-start md:items-center gap-6 md:justify-between'>
                    <div className='flex items-center justify-center gap-3 md:gap-5  '>
                        <img src={user.photoURL} alt="" className=' rounded-lg w-28 h-28' />
                        <div className='space-y-1'>
                            <h1 className='text-2xl lg:text-4xl font-medium text-secondary'>{user.displayName}</h1>
                            <p className='font-semibold text-lg text-gray-600'>{user.email}</p>
                        </div>
                    </div>
                    <div>
                        <Link to="/profile/updateProfile"  className=' bg-primary px-4 py-2 sm:px-8 sm:py-3 text-white font-medium rounded-lg flex items-center gap-1 cursor-pointer hover:bg-accent' > <FaEdit />Update Profile</Link>
                    </div>

                </div>
            </div>
        </div>




    );
};

export default Profile;