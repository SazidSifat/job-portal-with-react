import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {

    const location = useLocation()


    const { loading, user } = useContext(AuthContext)

    if (loading) {
        return (
            <Loading/>
        )
    }

    return user ? children : <Navigate state={location.pathname} to='/auth/login' />

};

export default PrivateRoute;