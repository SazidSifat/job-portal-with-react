import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    console.log(location);

    const { user } = useContext(AuthContext)

    return user ? children : <Navigate state={location.pathname} to='/auth/login' />

};

export default PrivateRoute;