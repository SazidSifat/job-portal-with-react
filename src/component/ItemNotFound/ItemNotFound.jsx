import React from 'react';
import { Link, useParams } from 'react-router';

const ItemNotFound = () => {
    const { id } = useParams()
    return (
        <div className='h-[50vh] flex items-center flex-col gap-6 justify-center'>

            <h1 className='text-3xl text-secondary font-semibold'>Company Details Not Found</h1>
            <p className='text-red-400 font-medium'>"Invalid : {id}"</p>


            <Link to="/" className='btn btn-primary'> Back to home</Link>

        </div>
    );
};

export default ItemNotFound;