import React, { useContext } from 'react';
import { authContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const  {user}= useContext(authContext)
    const location = useLocation()
    console.log(location)
    if(user){
        return children
    }

    return<Navigate to={'/login'} state={{from :location} }></Navigate>
};

export default PrivateRoutes;