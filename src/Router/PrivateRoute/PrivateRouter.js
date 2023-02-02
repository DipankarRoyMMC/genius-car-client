import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1 className='text-4xl text-red-500'>Loading...</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }}></Navigate>
};

export default PrivateRouter;