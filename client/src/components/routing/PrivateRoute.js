import React, { useContext } from 'react'
import { Route ,Navigate, Outlet } from 'react-router';
import authContext from '../../context/auth/authContext'

const PrivateRoute = ({component: Component , ...rest}) => {

    const {isAuthenticated, loading} = useContext(authContext); 

    return (
             (!isAuthenticated && !loading)?(
                 <Navigate to = '/login'/>
             ):
             <Outlet/>

    )
}

export default PrivateRoute
