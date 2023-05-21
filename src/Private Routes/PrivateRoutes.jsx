import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (<div className='flex justify-center items-center mt-10'>
            <progress className="progress progress-success w-56 flex justify-center items-center" value="100" max="100"></progress>
        </div>)
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default PrivateRoutes;