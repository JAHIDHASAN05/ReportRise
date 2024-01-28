import React, { useContext } from 'react';
import { authContext } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const  {user , loading}= useContext(authContext)
    const location = useLocation()
    console.log(loading)

    if(loading){
        return   <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    if(user){
        return children
    }

    return<Navigate to={'/login'} state={{from :location} }></Navigate>
};

export default PrivateRoutes;