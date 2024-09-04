import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuth from '../hooks/useAuth';


const UserRoute = () => {
  const user = useAuth();


  return user ? <Outlet /> : <Navigate to={'/'} replace />


}

export default UserRoute